import { createXMLAttribute, testSuggestionsScenario } from "../../utils";
import { UI5SemanticModel } from "@ui5-language-assistant/semantic-model-types";
import {
  expectSuggestions,
  expectXMLAttribute,
  generateModel,
  GEN_MODEL_TIMEOUT
} from "@ui5-language-assistant/test-utils";
import { namespaceValueSuggestions } from "../../../src/providers/attributeValue/namespace";
import { expectUI5Namespace } from "../attributeName/namespace-spec";
import { expect } from "chai";
import { partial } from "lodash";
import { ui5NodeToFQN } from "@ui5-language-assistant/logic-utils";
import { DEFAULT_NS } from "@xml-tools/ast";

const expectNamespaceValuesSuggestions = partial(expectSuggestions, _ => {
  expectUI5Namespace(_.ui5Node);
  expectXMLAttribute(_.astNode);
  expect(_.type).to.equal("UI5NamespacesInXMLAttributeValue");
  return ui5NodeToFQN(_.ui5Node);
});

describe("The ui5-editor-tools xml-views-completion", () => {
  let ui5SemanticModel: UI5SemanticModel;
  before(async function() {
    this.timeout(GEN_MODEL_TIMEOUT);
    ui5SemanticModel = await generateModel({ version: "1.74.0" });
  });

  context("namespaces values", () => {
    context("applicable scenarios", () => {
      it("will suggest namespace values with no prefix provided", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="table⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.table",
              "sap.ui.table.plugins",
              "sap.ui.table.rowmodes",
              "sap.ui.comp.smarttable"
            ]);
          }
        });
      });

      it("will suggest namespace values with prefix provided and empty attribute value", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns:dnd="⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.core.dnd",
              "sap.f.dnd"
            ]);
          }
        });
      });

      it("will suggest namespace values with key prefix and partial attribute value provided", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns:rowmodes="table⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.table.rowmodes"
            ]);
          }
        });
      });

      it("will suggest namespace values without filtering by prefix when no namespace short name equals to prefix", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns:abc="table⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.table",
              "sap.ui.table.plugins",
              "sap.ui.table.rowmodes",
              "sap.ui.comp.smarttable"
            ]);
          }
        });
      });

      it("will suggest namespace values in exploration mode", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.ui.core.⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.core.dnd",
              "sap.ui.core.mvc",
              "sap.ui.core.search",
              "sap.ui.core.tmpl",
              "sap.ui.core.util"
            ]);
          }
        });
      });

      it("will suggest namespace values when value starts with prefix matching several namespaces", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns:abc="sap.ui.u⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.unified",
              "sap.ui.unified.calendar",
              "sap.ui.ux3"
            ]);
          }
        });
      });

      it("will suggest namespace values that contain the prefix when exploration mode doesn't return any namespaces", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="ui.core.⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceValuesSuggestions(suggestions, [
              "sap.ui.core.dnd",
              "sap.ui.core.mvc",
              "sap.ui.core.search",
              "sap.ui.core.tmpl",
              "sap.ui.core.util"
            ]);
          }
        });
      });
    });

    context("non applicable scenarios", () => {
      it("will not suggest when used on undefined class", () => {
        const xmlSnippet = `
        <mvc:Controller1
          xmlns:mvc="sap.ui.core⇶">
        </mvc:Controller1>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [namespaceValueSuggestions]
          },
          assertion: suggestions => {
            expect(suggestions).to.be.empty;
          }
        });
      });
    });

    context("not reproducible scenarios", () => {
      it("will not suggest when attribute key is null", () => {
        const xmlAttribute = createXMLAttribute("dummy", null, null, {});
        const suggestions = namespaceValueSuggestions({
          attribute: xmlAttribute,
          context: ui5SemanticModel,
          element: xmlAttribute.parent,
          prefix: ""
        });
        expect(suggestions).to.be.empty;
      });

      // test covers case when attribute value is null, that is impossible to reproduce
      it("will suggest when attribute value is null", () => {
        const xmlAttribute = createXMLAttribute("Control", "xmlns:tmpl", null, {
          [DEFAULT_NS]: "sap.ui.core"
        });
        const suggestions = namespaceValueSuggestions({
          attribute: xmlAttribute,
          context: ui5SemanticModel,
          element: xmlAttribute.parent,
          prefix: "xmlns:tmpl"
        });
        expectNamespaceValuesSuggestions(suggestions, ["sap.ui.core.tmpl"]);
      });
    });
  });
});