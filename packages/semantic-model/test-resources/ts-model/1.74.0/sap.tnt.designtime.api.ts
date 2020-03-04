import { LibraryFile } from "@vscode-ui5/semantic-model/src/apiJson";

const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.74.0",
  library: "sap.tnt",
  symbols: [
    {
      kind: "namespace",
      name: "sap.tnt",
      basename: "tnt",
      resource: "sap/tnt/library.js",
      module: "sap/tnt/library",
      export: "",
      static: true,
      visibility: "public",
      description:
        "SAPUI5 library with controls specialized for administrative applications."
    },
    {
      kind: "class",
      name: "sap.tnt.InfoLabel",
      basename: "InfoLabel",
      resource: "sap/tnt/InfoLabel.js",
      module: "sap/tnt/InfoLabel",
      export: "",
      static: true,
      visibility: "public",
      since: "1.54",
      extends: "sap.ui.core.Control",
      implements: ["sap.ui.core.IFormContent"],
      description:
        "The <code>InfoLabel</code> is a small non-interactive control which contains text information and non-semantic color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).\n\n<h3>Overview</h3>\n\nThe control visualizes text information without user interaction. The text inside the control is always in upper case. It can have smaller or larger side paddings which can be specified by the <code>renderMode</code> property. The text-background color pair can be changed by setting a number between 1 and 10 that corresponds to the 10 predefined color combinations of the <code>colorScheme</code> property. The control is designed to be vertically aligned with UI5 Input and Button control families. When using <code>InfoLabel</code> in non-editable <code>Forms</code>, <code>Tables</code>, etc., set <code>displayOnly=true</code> for best visual results.\n\n<h3>Usage Guidelines</h3> <ul> <li>If the text is longer than the width of the control, it doesn’t wrap. Instead, it’s represented as ellipsis. </li> <li>When truncated, the full text in the control is not visible. Therefore, it’s recommended to make more space for longer items to be fully displayed.</li> <li>Colors are not semantic and have no visual representation in sap_belize_hcb and sap_belize_hcw themes.</li> <li>The control shows plain text only, formatting is not visualized.</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            bindable: true,
            description:
              "Specifies the text inside the <code>InfoLabel</code> control.",
            methods: ["getText", "setText", "bindText", "unbindText"]
          },
          {
            name: "renderMode",
            type: "sap.tnt.RenderMode",
            defaultValue: "Loose",
            group: "Appearance",
            visibility: "public",
            description:
              "Specifies the type of the <code>InfoLabel</code> paddings - loose or narrow. <b>Note:</b> By default the padding is loose. It is recommended to use narrow (smaller) paddings for numeric texts.",
            methods: ["getRenderMode", "setRenderMode"]
          },
          {
            name: "colorScheme",
            type: "int",
            defaultValue: 7,
            group: "Misc",
            visibility: "public",
            description:
              "Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can choose from 10 predefined background and text color combinations. The color schemes are non-semantic, you can select them according to your own preferences. <b>Note:</b> ColorScheme 10 is available only in Fiori 3 theme. The default <code>colorScheme</code> is 7.",
            methods: ["getColorScheme", "setColorScheme"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            description:
              "Specifies the width of the <code>InfoLabel</code> control. By default, the <code>InfoLabel</code> control has the width of the content. Set this property to restrict the width to a custom value.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "displayOnly",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines if the <code>InfoLabel</code> is in <code>displayOnly</code> mode. When set to <code>true</code> the control size adjusts to fit other controls, for example non-editable <code>Forms</code>.",
            methods: ["getDisplayOnly", "setDisplayOnly"]
          },
          {
            name: "textDirection",
            type: "sap.ui.core.TextDirection",
            defaultValue: "Inherit",
            group: "Appearance",
            visibility: "public",
            description:
              "Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.",
            methods: ["getTextDirection", "setTextDirection"]
          },
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: "",
            group: "Appearance",
            visibility: "public",
            since: "1.74",
            description:
              "Defines the icon to be displayed as graphical element within the <code>InfoLabel</code>. It can be an icon from the icon font.",
            methods: ["getIcon", "setIcon"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>InfoLabel</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "bindText",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBindingInfo",
              type: "object",
              optional: false,
              description: "The binding information"
            }
          ],
          description:
            "Binds property {@link #getText text} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of <code>oBindingInfo</code>"
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.InfoLabel with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getColorScheme",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>colorScheme</code>"
          },
          description:
            "Gets current value of property {@link #getColorScheme colorScheme}.\n\nSpecifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can choose from 10 predefined background and text color combinations. The color schemes are non-semantic, you can select them according to your own preferences. <b>Note:</b> ColorScheme 10 is available only in Fiori 3 theme. The default <code>colorScheme</code> is 7.\n\nDefault value is <code>7</code>."
        },
        {
          name: "getDisplayOnly",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>displayOnly</code>"
          },
          description:
            "Gets current value of property {@link #getDisplayOnly displayOnly}.\n\nDetermines if the <code>InfoLabel</code> is in <code>displayOnly</code> mode. When set to <code>true</code> the control size adjusts to fit other controls, for example non-editable <code>Forms</code>.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getIcon",
          visibility: "public",
          since: "1.74",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nDefines the icon to be displayed as graphical element within the <code>InfoLabel</code>. It can be an icon from the icon font.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.tnt.InfoLabel."
        },
        {
          name: "getRenderMode",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.RenderMode",
            description: "Value of property <code>renderMode</code>"
          },
          description:
            "Gets current value of property {@link #getRenderMode renderMode}.\n\nSpecifies the type of the <code>InfoLabel</code> paddings - loose or narrow. <b>Note:</b> By default the padding is loose. It is recommended to use narrow (smaller) paddings for numeric texts.\n\nDefault value is <code>Loose</code>."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nSpecifies the text inside the <code>InfoLabel</code> control.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getTextDirection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.TextDirection",
            description: "Value of property <code>textDirection</code>"
          },
          description:
            "Gets current value of property {@link #getTextDirection textDirection}.\n\nAvailable options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.\n\nDefault value is <code>Inherit</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nSpecifies the width of the <code>InfoLabel</code> control. By default, the <code>InfoLabel</code> control has the width of the content. Set this property to restrict the width to a custom value."
        },
        {
          name: "setColorScheme",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColorScheme",
              type: "int",
              optional: false,
              description: "New value for property <code>colorScheme</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColorScheme colorScheme}.\n\nSpecifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can choose from 10 predefined background and text color combinations. The color schemes are non-semantic, you can select them according to your own preferences. <b>Note:</b> ColorScheme 10 is available only in Fiori 3 theme. The default <code>colorScheme</code> is 7.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>7</code>."
        },
        {
          name: "setDisplayOnly",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bDisplayOnly",
              type: "boolean",
              optional: false,
              description: "New value for property <code>displayOnly</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDisplayOnly displayOnly}.\n\nDetermines if the <code>InfoLabel</code> is in <code>displayOnly</code> mode. When set to <code>true</code> the control size adjusts to fit other controls, for example non-editable <code>Forms</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          since: "1.74",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIcon",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>icon</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIcon icon}.\n\nDefines the icon to be displayed as graphical element within the <code>InfoLabel</code>. It can be an icon from the icon font.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setRenderMode",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sRenderMode",
              type: "sap.tnt.RenderMode",
              optional: false,
              description: "New value for property <code>renderMode</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRenderMode renderMode}.\n\nSpecifies the type of the <code>InfoLabel</code> paddings - loose or narrow. <b>Note:</b> By default the padding is loose. It is recommended to use narrow (smaller) paddings for numeric texts.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Loose</code>."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sText",
              type: "string",
              optional: false,
              description: "New value for property <code>text</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getText text}.\n\nSpecifies the text inside the <code>InfoLabel</code> control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setTextDirection",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTextDirection",
              type: "sap.ui.core.TextDirection",
              optional: false,
              description: "New value for property <code>textDirection</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTextDirection textDirection}.\n\nAvailable options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Inherit</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nSpecifies the width of the <code>InfoLabel</code> control. By default, the <code>InfoLabel</code> control has the width of the content. Set this property to restrict the width to a custom value.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "unbindText",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.InfoLabel",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description: "Unbinds property {@link #getText text} from model data."
        }
      ]
    },
    {
      kind: "interface",
      name: "sap.tnt.IToolHeader",
      basename: "IToolHeader",
      resource: "sap/tnt/library.js",
      module: "sap/tnt/library",
      static: true,
      visibility: "public",
      since: "1.68",
      description:
        "Interface for controls suitable for the <code>header</code> aggregation of {@link sap.tnt.ToolPage}.",
      "ui5-metamodel": true
    },
    {
      kind: "class",
      name: "sap.tnt.NavigationList",
      basename: "NavigationList",
      resource: "sap/tnt/NavigationList.js",
      module: "sap/tnt/NavigationList",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Control",
      description:
        "The NavigationList control is an interactive control, which provides a choice of different items, ordered as a list.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            description: "Specifies the width of the control.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "expanded",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Specifies if the control is in expanded or collapsed mode.",
            methods: ["getExpanded", "setExpanded"]
          },
          {
            name: "selectedKey",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            since: "1.62.0",
            description: "Specifies the currently selected key.",
            methods: ["getSelectedKey", "setSelectedKey"]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.tnt.NavigationListItem",
            cardinality: "0..n",
            visibility: "public",
            description: "The items displayed in the list.",
            methods: [
              "getItems",
              "destroyItems",
              "insertItem",
              "addItem",
              "removeItem",
              "indexOfItem",
              "removeAllItems"
            ]
          }
        ],
        defaultAggregation: "items",
        associations: [
          {
            name: "ariaDescribedBy",
            singularName: "ariaDescribedBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Association to controls / IDs, which describe this control (see WAI-ARIA attribute aria-describedby).",
            methods: [
              "getAriaDescribedBy",
              "addAriaDescribedBy",
              "removeAriaDescribedBy",
              "removeAllAriaDescribedBy"
            ]
          },
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Association to controls / IDs, which label this control (see WAI-ARIA attribute aria-labelledby).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          },
          {
            name: "selectedItem",
            singularName: "selectedItem",
            type: "sap.tnt.NavigationListItem",
            cardinality: "0..1",
            visibility: "public",
            since: "1.52.0",
            description:
              "The currently selected <code>NavigationListItem</code>.",
            methods: ["getSelectedItem", "setSelectedItem"]
          }
        ],
        events: [
          {
            name: "itemSelect",
            visibility: "public",
            description: "Fired when an item is selected.",
            parameters: {
              item: {
                name: "item",
                type: "sap.ui.core.Item",
                description: "The selected item."
              }
            },
            methods: ["attachItemSelect", "detachItemSelect", "fireItemSelect"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new NavigationList.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "itemSelect",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    item: {
                      name: "item",
                      type: "sap.ui.core.Item",
                      optional: false,
                      description: "The selected item."
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when an item is selected."
        }
      ],
      methods: [
        {
          name: "addAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaDescribedBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaDescribedBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationListItem",
              optional: false,
              description: "The item to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some item to the aggregation {@link #getItems items}."
        },
        {
          name: "attachItemSelect",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationList</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.NavigationList</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.tnt.NavigationList</code> itself.\n\nFired when an item is selected."
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the items in the aggregation {@link #getItems items}."
        },
        {
          name: "detachItemSelect",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.NavigationList</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.NavigationList with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireItemSelect",
          visibility: "protected",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                item: {
                  name: "item",
                  type: "sap.ui.core.Item",
                  optional: true,
                  description: "The selected item."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:itemSelect itemSelect} to attached listeners."
        },
        {
          name: "getAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]"
          },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]"
          },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expanded</code>"
          },
          description:
            "Gets current value of property {@link #getExpanded expanded}.\n\nSpecifies if the control is in expanded or collapsed mode.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem[]"
          },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nThe items displayed in the list."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.tnt.NavigationList."
        },
        {
          name: "getSelectedItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem|null",
            description: "The selected item or null if nothing is selected"
          },
          description:
            "Gets the currently selected <code>NavigationListItem</code>."
        },
        {
          name: "getSelectedKey",
          visibility: "public",
          since: "1.62.0",
          returnValue: {
            type: "string",
            description: "Value of property <code>selectedKey</code>"
          },
          description:
            "Gets current value of property {@link #getSelectedKey selectedKey}.\n\nSpecifies the currently selected key."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nSpecifies the width of the control."
        },
        {
          name: "indexOfItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationListItem",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationListItem",
              optional: false,
              description: "The item to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position"
            }
          ],
          description:
            "Inserts a item into the aggregation {@link #getItems items}."
        },
        {
          name: "removeAllAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllItems",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaDescribedBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaDescribedBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaDescribedBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.tnt.NavigationListItem",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "setExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bExpanded",
              type: "boolean",
              optional: false,
              description: "New value for property <code>expanded</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExpanded expanded}.\n\nSpecifies if the control is in expanded or collapsed mode.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSelectedItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList|null",
            description: "The <code>selectedItem</code> association"
          },
          parameters: [
            {
              name: "selectedItem",
              type: "string|sap.tnt.NavigationListItem",
              optional: false,
              description: "The control to be set as selected"
            }
          ],
          description:
            "Sets the association for selectedItem. Set <code>null</code> to deselect."
        },
        {
          name: "setSelectedKey",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "selectedKey",
              type: "string",
              optional: false,
              description: "The key of the item to be selected"
            }
          ],
          description: "Sets the selected item based on a key."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nSpecifies the width of the control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.tnt.NavigationListItem",
      basename: "NavigationListItem",
      resource: "sap/tnt/NavigationListItem.js",
      module: "sap/tnt/NavigationListItem",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Item",
      description:
        "The NavigationListItem control represents an action, which can be selected by the user. It can provide sub items.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description: "Specifies the icon for the item.",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "expanded",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Specifies if the item is expanded.",
            methods: ["getExpanded", "setExpanded"]
          },
          {
            name: "hasExpander",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Specifies if the item has an expander.",
            methods: ["getHasExpander", "setHasExpander"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            since: "1.52",
            description: "Specifies if the item should be shown.",
            methods: ["getVisible", "setVisible"]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.tnt.NavigationListItem",
            cardinality: "0..n",
            visibility: "public",
            description: "The sub items.",
            methods: [
              "getItems",
              "destroyItems",
              "insertItem",
              "addItem",
              "removeItem",
              "indexOfItem",
              "removeAllItems"
            ]
          },
          {
            name: "_expandIconControl",
            singularName: "_expandIconControl",
            type: "sap.ui.core.Icon",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_expandIconControl",
              "destroy_expandIconControl",
              "set_expandIconControl"
            ]
          }
        ],
        defaultAggregation: "items",
        events: [
          {
            name: "select",
            visibility: "public",
            description: "Fired when this item is selected.",
            parameters: {
              item: {
                name: "item",
                type: "sap.ui.core.Item",
                description: "The selected item."
              }
            },
            methods: ["attachSelect", "detachSelect", "fireSelect"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new NavigationListItem.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "select",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    item: {
                      name: "item",
                      type: "sap.ui.core.Item",
                      optional: false,
                      description: "The selected item."
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when this item is selected."
        }
      ],
      methods: [
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationListItem",
              optional: false,
              description: "The item to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some item to the aggregation {@link #getItems items}."
        },
        {
          name: "attachSelect",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationListItem</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.tnt.NavigationListItem</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.tnt.NavigationListItem</code> itself.\n\nFired when this item is selected."
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the items in the aggregation {@link #getItems items}."
        },
        {
          name: "detachSelect",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.tnt.NavigationListItem</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.NavigationListItem with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}."
        },
        {
          name: "fireSelect",
          visibility: "protected",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                item: {
                  name: "item",
                  type: "sap.ui.core.Item",
                  optional: true,
                  description: "The selected item."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:select select} to attached listeners."
        },
        {
          name: "getExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expanded</code>"
          },
          description:
            "Gets current value of property {@link #getExpanded expanded}.\n\nSpecifies if the item is expanded.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getHasExpander",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>hasExpander</code>"
          },
          description:
            "Gets current value of property {@link #getHasExpander hasExpander}.\n\nSpecifies if the item has an expander.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nSpecifies the icon for the item.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem[]"
          },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nThe sub items."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.tnt.NavigationListItem."
        },
        {
          name: "getVisible",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nSpecifies if the item should be shown.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationListItem",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationListItem",
              optional: false,
              description: "The item to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position"
            }
          ],
          description:
            "Inserts a item into the aggregation {@link #getItems items}."
        },
        {
          name: "removeAllItems",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.tnt.NavigationListItem",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "setExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bExpanded",
              type: "boolean",
              optional: false,
              description: "New value for property <code>expanded</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExpanded expanded}.\n\nSpecifies if the item is expanded.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setHasExpander",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHasExpander",
              type: "boolean",
              optional: false,
              description: "New value for property <code>hasExpander</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHasExpander hasExpander}.\n\nSpecifies if the item has an expander.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIcon",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>icon</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIcon icon}.\n\nSpecifies the icon for the item.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setVisible",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.tnt.NavigationListItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nSpecifies if the item should be shown.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.tnt.RenderMode",
      basename: "RenderMode",
      resource: "sap/tnt/library.js",
      module: "sap/tnt/library",
      export: "RenderMode",
      static: true,
      visibility: "public",
      description: "Predefined types of <code>InfoLabel</code>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Loose",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "When type of the content of <code>InfoLabel</code> is text padding are loose"
        },
        {
          name: "Narrow",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "When type of the content of <code>InfoLabel</code> is numeric paddings are narrow"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.tnt.SideNavigation",
      basename: "SideNavigation",
      resource: "sap/tnt/SideNavigation.js",
      module: "sap/tnt/SideNavigation",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Control",
      description:
        "The SideNavigation control is a container, which consists of flexible and fixed parts on top of each other. <h4>Responsive Behavior</h4> <ul> <li>The flexible part adapts its size to the fixed one.</li> <li>The flexible part has a scrollbar when the content is larger than the available space.</li> </ul> <b>Note:</b> In order for the SideNavigation to stretch properly, its parent layout control should only be the sap.tnt.ToolPage.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "expanded",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Specifies if the control is expanded.",
            methods: ["getExpanded", "setExpanded"]
          },
          {
            name: "selectedKey",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            since: "1.62.0",
            description: "Specifies the currently selected key.",
            methods: ["getSelectedKey", "setSelectedKey"]
          }
        ],
        aggregations: [
          {
            name: "item",
            singularName: "item",
            type: "sap.tnt.NavigationList",
            cardinality: "0..1",
            visibility: "public",
            bindable: true,
            description: "Defines the content inside the flexible part.",
            methods: [
              "getItem",
              "destroyItem",
              "setItem",
              "bindItem",
              "unbindItem"
            ]
          },
          {
            name: "fixedItem",
            singularName: "fixedItem",
            type: "sap.tnt.NavigationList",
            cardinality: "0..1",
            visibility: "public",
            description: "Defines the content inside the fixed part.",
            methods: ["getFixedItem", "destroyFixedItem", "setFixedItem"]
          },
          {
            name: "footer",
            singularName: "footer",
            type: "sap.tnt.NavigationList",
            cardinality: "0..1",
            visibility: "public",
            description: "Defines the content inside the footer.",
            methods: ["getFooter", "destroyFooter", "setFooter"]
          },
          {
            name: "_topArrowControl",
            singularName: "_topArrowControl",
            type: "sap.ui.core.Icon",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "The top arrow, used for scrolling throw items when SideNavigation is collapsed.",
            methods: [
              "get_topArrowControl",
              "destroy_topArrowControl",
              "set_topArrowControl"
            ]
          },
          {
            name: "_bottomArrowControl",
            singularName: "_bottomArrowControl",
            type: "sap.ui.core.Icon",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "The bottom arrow, used for scrolling throw items when SideNavigation is collapsed.",
            methods: [
              "get_bottomArrowControl",
              "destroy_bottomArrowControl",
              "set_bottomArrowControl"
            ]
          }
        ],
        defaultAggregation: "item",
        associations: [
          {
            name: "selectedItem",
            singularName: "selectedItem",
            type: "sap.tnt.NavigationListItem",
            cardinality: "0..1",
            visibility: "public",
            since: "1.52.0",
            description: "The selected <code>NavigationListItem</code>.",
            methods: ["getSelectedItem", "setSelectedItem"]
          }
        ],
        events: [
          {
            name: "itemSelect",
            visibility: "public",
            description: "Fired when an item is selected.",
            parameters: {
              item: {
                name: "item",
                type: "sap.ui.core.Item",
                description: "The selected item."
              }
            },
            methods: ["attachItemSelect", "detachItemSelect", "fireItemSelect"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new SideNavigation.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/side-navigation/ Side Navigation}"
        ]
      },
      events: [
        {
          name: "itemSelect",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    item: {
                      name: "item",
                      type: "sap.ui.core.Item",
                      optional: false,
                      description: "The selected item."
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when an item is selected."
        }
      ],
      methods: [
        {
          name: "attachItemSelect",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.tnt.SideNavigation</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.SideNavigation</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.tnt.SideNavigation</code> itself.\n\nFired when an item is selected."
        },
        {
          name: "bindItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBindingInfo",
              type: "object",
              optional: false,
              description: "The binding information"
            }
          ],
          description:
            "Binds aggregation {@link #getItem item} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "destroyFixedItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the fixedItem in the aggregation {@link #getFixedItem fixedItem}."
        },
        {
          name: "destroyFooter",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the footer in the aggregation {@link #getFooter footer}."
        },
        {
          name: "destroyItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the item in the aggregation {@link #getItem item}."
        },
        {
          name: "detachItemSelect",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.SideNavigation</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.SideNavigation with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireItemSelect",
          visibility: "protected",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                item: {
                  name: "item",
                  type: "sap.ui.core.Item",
                  optional: true,
                  description: "The selected item."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:itemSelect itemSelect} to attached listeners."
        },
        {
          name: "getExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expanded</code>"
          },
          description:
            "Gets current value of property {@link #getExpanded expanded}.\n\nSpecifies if the control is expanded.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFixedItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList"
          },
          description:
            "Gets content of aggregation {@link #getFixedItem fixedItem}.\n\nDefines the content inside the fixed part."
        },
        {
          name: "getFooter",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList"
          },
          description:
            "Gets content of aggregation {@link #getFooter footer}.\n\nDefines the content inside the footer."
        },
        {
          name: "getItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.NavigationList"
          },
          description:
            "Gets content of aggregation {@link #getItem item}.\n\nDefines the content inside the flexible part."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.tnt.SideNavigation."
        },
        {
          name: "getSelectedItem",
          visibility: "public",
          since: "1.52.0",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or <code>null</code>."
        },
        {
          name: "getSelectedKey",
          visibility: "public",
          since: "1.62.0",
          returnValue: {
            type: "string",
            description: "Value of property <code>selectedKey</code>"
          },
          description:
            "Gets current value of property {@link #getSelectedKey selectedKey}.\n\nSpecifies the currently selected key."
        },
        {
          name: "setExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description: "this SideNavigation reference for chaining."
          },
          parameters: [
            {
              name: "isExpanded",
              type: "boolean",
              optional: false,
              description: "Indication if the SideNavigation is expanded."
            }
          ],
          description: "Sets if the control is in expanded or collapsed mode."
        },
        {
          name: "setFixedItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFixedItem",
              type: "sap.tnt.NavigationList",
              optional: false,
              description: "The fixedItem to set"
            }
          ],
          description: "Sets the aggregated {@link #getFixedItem fixedItem}."
        },
        {
          name: "setFooter",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFooter",
              type: "sap.tnt.NavigationList",
              optional: false,
              description: "The footer to set"
            }
          ],
          description: "Sets the aggregated {@link #getFooter footer}."
        },
        {
          name: "setItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.tnt.NavigationList",
              optional: false,
              description: "The item to set"
            }
          ],
          description: "Sets the aggregated {@link #getItem item}."
        },
        {
          name: "setSelectedItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation|null",
            description: "The <code>selectedItem</code> association"
          },
          parameters: [
            {
              name: "selectedItem",
              type: "string|sap.tnt.NavigationListItem",
              optional: false,
              description: "The control to be set as selected"
            }
          ],
          description: "Sets the association for selectedItem"
        },
        {
          name: "setSelectedKey",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "selectedKey",
              type: "string",
              optional: false,
              description: "The key of the item to be selected"
            }
          ],
          description: "Sets the selected item based on a key."
        },
        {
          name: "unbindItem",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getItem item} from model data."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.tnt.ToolHeader",
      basename: "ToolHeader",
      resource: "sap/tnt/ToolHeader.js",
      module: "sap/tnt/ToolHeader",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.m.OverflowToolbar",
      implements: ["sap.tnt.IToolHeader"],
      description:
        "The ToolHeader control is a horizontal container that is most commonly used to display buttons, labels, and other various input controls. <h3>Overview</h3> The ToolHeader control is based on {@link sap.m.OverflowToolbar}. It contains clearly structured menus of commands that are available across the various apps within the same tool layout. <h3>Usage</h3> <ul> <li>If an app implements side navigation in addition to the tool header menu, the menu icon must be the first item on the left-hand side of the tool header.</li> <li>The app menu and the side navigation must not have any dependencies and must work independently.</li> </ul> <h4>Fiori 3 theme specifics</h4> In Fiori 3 Default theme the ToolHeader is with dark design unlike most of the other controls. This defines the usage of limited controls inside it, which will result in good design combination.<br/> The ToolHeader stylizes the contained controls with the Shell color parameters, to match the dark design requirement. However, that's not a dark theme.<br/><br/> Only the following controls are supported: <ul> <li>sap.m.Text</li> <li>sap.m.Title</li> <li>sap.m.ObjectStatus</li> <li>sap.ui.core.Icon</li> <li>sap.m.Button</li> <li>sap.m.MenuButton</li> <li>sap.m.Select</li> <li>sap.m.SearchField</li> <li>sap.m.IconTabHeader</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description: "Constructor for a new ToolHeader.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/tool-header/ Tool Header}"
        ]
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.ToolHeader with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.tnt.ToolHeader."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.tnt.ToolHeaderUtilitySeparator",
      basename: "ToolHeaderUtilitySeparator",
      resource: "sap/tnt/ToolHeaderUtilitySeparator.js",
      module: "sap/tnt/ToolHeaderUtilitySeparator",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16",
      extends: "sap.ui.core.Control",
      description:
        "The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control to specify where the overflow button is placed.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ToolHeaderUtilitySeparator.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.\n\nThis class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control} can be used."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.ToolHeaderUtilitySeparator with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.tnt.ToolHeaderUtilitySeparator."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.tnt.ToolPage",
      basename: "ToolPage",
      resource: "sap/tnt/ToolPage.js",
      module: "sap/tnt/ToolPage",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Control",
      description:
        "The ToolPage is a layout control, used to create a basic tools app that has a header, side navigation and contents area. <h4>Overview</h4> The control has three main areas - a header on top, navigation to the side and a content area that can hold any control. The header and side navigation use custom controls - {@link sap.tnt.ToolHeader} and {@link sap.tnt.SideNavigation}. <h4>Usage</h4> The main usage of the sap.tnt controls is for scenarios in the tooling or administration space.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "sideExpanded",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.",
            methods: ["getSideExpanded", "setSideExpanded"]
          }
        ],
        aggregations: [
          {
            name: "header",
            singularName: "header",
            type: "sap.tnt.IToolHeader",
            cardinality: "0..1",
            visibility: "public",
            description: "The control to appear in the header area.",
            methods: ["getHeader", "destroyHeader", "setHeader"]
          },
          {
            name: "sideContent",
            singularName: "sideContent",
            type: "sap.tnt.SideNavigation",
            cardinality: "0..1",
            visibility: "public",
            description: "The side menu of the layout.",
            methods: ["getSideContent", "destroySideContent", "setSideContent"]
          },
          {
            name: "mainContents",
            singularName: "mainContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The content section.",
            methods: [
              "getMainContents",
              "destroyMainContents",
              "insertMainContent",
              "addMainContent",
              "removeMainContent",
              "indexOfMainContent",
              "removeAllMainContents"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ToolPage.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMainContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The mainContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some mainContent to the aggregation {@link #getMainContents mainContents}."
        },
        {
          name: "destroyHeader",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the header in the aggregation {@link #getHeader header}."
        },
        {
          name: "destroyMainContents",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the mainContents in the aggregation {@link #getMainContents mainContents}."
        },
        {
          name: "destroySideContent",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the sideContent in the aggregation {@link #getSideContent sideContent}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.tnt.ToolPage with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getHeader",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.IToolHeader"
          },
          description:
            "Gets content of aggregation {@link #getHeader header}.\n\nThe control to appear in the header area."
        },
        {
          name: "getMainContents",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getMainContents mainContents}.\n\nThe content section."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.tnt.ToolPage."
        },
        {
          name: "getSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.SideNavigation"
          },
          description:
            "Gets content of aggregation {@link #getSideContent sideContent}.\n\nThe side menu of the layout."
        },
        {
          name: "getSideExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>sideExpanded</code>"
          },
          description:
            "Gets current value of property {@link #getSideExpanded sideExpanded}.\n\nIndicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfMainContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMainContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The mainContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMainContents mainContents}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMainContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The mainContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the mainContent should be inserted at; for a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a mainContent into the aggregation {@link #getMainContents mainContents}."
        },
        {
          name: "removeAllMainContents",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMainContents mainContents}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed mainContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vMainContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The mainContent to remove or its index or id"
            }
          ],
          description:
            "Removes a mainContent from the aggregation {@link #getMainContents mainContents}."
        },
        {
          name: "setHeader",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeader",
              type: "sap.tnt.IToolHeader",
              optional: false,
              description: "The header to set"
            }
          ],
          description: "Sets the aggregated {@link #getHeader header}."
        },
        {
          name: "setSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSideContent",
              type: "sap.tnt.SideNavigation",
              optional: false,
              description: "The sideContent to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSideContent sideContent}."
        },
        {
          name: "setSideExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description: "Pointer to the control instance for chaining"
          },
          parameters: [
            {
              name: "isSideExpanded",
              type: "boolean",
              optional: false,
              description: "defines whether the SideNavigation is expanded."
            }
          ],
          description: "Sets the expand/collapse state of the SideContent."
        },
        {
          name: "toggleSideContentMode",
          visibility: "public",
          returnValue: {
            type: "sap.tnt.ToolPage",
            description: "Pointer to the control instance for chaining."
          },
          description: "Toggles the expand/collapse state of the SideContent."
        }
      ]
    }
  ]
};