import { generate, TypeNameFix, Json } from "@vscode-ui5/semantic-model";
import { UI5SemanticModel } from "@vscode-ui5/semantic-model-types";
import { TestModelVersion } from "../../api";
import { readdirSync } from "fs";
import { readJsonSync } from "fs-extra";
import { resolve, dirname } from "path";
import { filter, reduce, has } from "lodash";

const MODEL_CACHE: Record<TestModelVersion, UI5SemanticModel> = Object.create(
  null
);

const fixes: Record<TestModelVersion, TypeNameFix> = {
  "1.60.14": {
    "{sap.ui.layout.cssgrid.IGridConfigurable}":
      "sap.ui.layout.cssgrid.IGridConfigurable",
    "sap.m.IHyphenation": undefined,
    "sap.ui.core.IDScope": undefined,
    "sap.m.TimePickerSlider": "sap.m.TimePickerSliders",
    "sap.ui.layout.ResponsiveSplitterPage": undefined,
    "sap.ui.layout.cssgrid.CSSGridTrack": undefined,
    "sap.ui.layout.cssgrid.CSSGridGapShortHand": undefined,
    "sap.ui.layout.cssgrid.CSSGridLine": undefined
  },
  "1.74.0": {
    "sap.m.PlanningCalendarHeader": undefined,
    "sap.m.TimePickerSlider": "sap.m.TimePickerSliders",
    "sap.ui.fl.write._internal.transport.TransportDialog": undefined,
    "sap.ui.layout.cssgrid.IGridItemLayoutData": undefined,
    "sap.ui.layout.ResponsiveSplitterPage": undefined
  }
};

function getModelFolder(version: TestModelVersion): string {
  const pkgJsonPath = require.resolve("@vscode-ui5/test-utils/package.json");
  const rootPkgFolder = dirname(pkgJsonPath);
  const modelFolder = resolve(
    rootPkgFolder,
    "resources",
    "model",
    version,
    "input"
  );
  return modelFolder;
}

export function getTypeNameFixForVersion(
  version: TestModelVersion
): TypeNameFix {
  return fixes[version];
}

export function loadLibraries(version: TestModelVersion): Record<string, Json> {
  const inputFolder = getModelFolder(version);
  const files = readdirSync(inputFolder);
  const LIBFILE_SUFFIX = ".designtime.api.json";
  const libFiles = filter(files, _ => _.endsWith(LIBFILE_SUFFIX));
  const libToFileContent = reduce(
    libFiles,
    (libToFileContentMap, file) => {
      const libName = file.substring(0, file.length - LIBFILE_SUFFIX.length);
      libToFileContentMap[libName] = readJsonSync(resolve(inputFolder, file));
      return libToFileContentMap;
    },
    Object.create(null)
  );
  return libToFileContent;
}

export function generateModel(
  version: TestModelVersion,
  disableCache = false
): UI5SemanticModel {
  if (has(MODEL_CACHE, version) && !disableCache) {
    console.log(`loading model version ${version} from cache`);
    return MODEL_CACHE[version];
  }

  const libToFileContent = loadLibraries(version);
  const model = generate({
    libraries: libToFileContent,
    typeNameFix: getTypeNameFixForVersion(version)
  });
  if (!disableCache) {
    MODEL_CACHE[version] = model;
  }
  return model;
}