import { LibraryFile } from "../../../src/apiJson";

export const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.74.0",
  library: "sap.ui.ux3",
  symbols: [
    {
      kind: "namespace",
      name: "sap.ui.ux3",
      basename: "ux3",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "",
      static: true,
      visibility: "public",
      description:
        "Controls that implement the SAP User Experience (UX) Guidelines 3.0",
      deprecated: {
        since: "1.38"
      },
      properties: [
        {
          name: "ShellPersonalization",
          module: "sap/ui/ux3/ShellPersonalization",
          export: "",
          visibility: "public",
          static: true,
          type: "undefined",
          description:
            "Experimental implementation of visual Ux3 Shell personalization / branding.\n\nDO NOT USE PRODUCTIVELY!!!\n\nBeing completely non-generic as of now, this is supposed to facilitate discussions with Ux about the personalization capabilities. Once that concept is more final, we can go for a cleaner implementation, considering the number of configurable properties etc.",
          experimental: {
            since: "1.0",
            text:
              "The Shell-features Personalization, Color Picker and “Inspect”-Tool are only experimental work and might change or disappear in future versions."
          },
          deprecated: {
            since: "1.36",
            text:
              "This class was never released for productive use and will never be."
          },
          resource: "sap/ui/ux3/ShellPersonalization.js"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ActionBar",
      basename: "ActionBar",
      resource: "sap/ui/ux3/ActionBar.js",
      module: "sap/ui/ux3/ActionBar",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "A special toolbar with predefined social actions which can be shown as needed. These are: Create an update (Feed), Follow, Mark for Follow Up, Mark as Favorite and Open Thing.\n\nIn addition business actions (ThingAction instances) can be added which are either displayed as MenuItems of the 'More' menu button or as individual tool bar buttons.\n\nWhen using this control, please be aware that it fulfills rather specific requirements: it has been designed for and is used within composite controls QuickView and ThingInspector.",
      deprecated: {
        since: "1.38",
        text:
          "Instead, use the <code>sap.m.Toolbar</code> or <code>sap.m.OverflowToolbar</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "followState",
            type: "sap.ui.ux3.FollowActionState",
            defaultValue: "Default",
            group: "Misc",
            visibility: "public",
            description:
              "Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default - FollowActionState.Follow - FollowActionState.Hold",
            methods: ["getFollowState", "setFollowState"]
          },
          {
            name: "flagState",
            type: "boolean",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Indicates whether “Mark for Follow Up” is active",
            methods: ["getFlagState", "setFlagState"]
          },
          {
            name: "favoriteState",
            type: "boolean",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Indicates whether “Favorite” is active",
            methods: ["getFavoriteState", "setFavoriteState"]
          },
          {
            name: "updateState",
            type: "boolean",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Indicates whether “Update” is active",
            methods: ["getUpdateState", "setUpdateState"]
          },
          {
            name: "thingIconURI",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The thing icon uri. Icon will be displayed in Feeder",
            methods: ["getThingIconURI", "setThingIconURI"]
          },
          {
            name: "alwaysShowMoreMenu",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.",
            methods: ["getAlwaysShowMoreMenu", "setAlwaysShowMoreMenu"]
          },
          {
            name: "showUpdate",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates whether social action “Update” is shown, default is ‘true’",
            methods: ["getShowUpdate", "setShowUpdate"]
          },
          {
            name: "showFollow",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates whether social action “Follow” is shown, default is ‘true’",
            methods: ["getShowFollow", "setShowFollow"]
          },
          {
            name: "showFlag",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’",
            methods: ["getShowFlag", "setShowFlag"]
          },
          {
            name: "showFavorite",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates whether social action “Favorite” is shown, default is ‘true’",
            methods: ["getShowFavorite", "setShowFavorite"]
          },
          {
            name: "showOpen",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates whether social action “Open” is shown, default is ‘true’",
            methods: ["getShowOpen", "setShowOpen"]
          },
          {
            name: "dividerWidth",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "The minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area",
            methods: ["getDividerWidth", "setDividerWidth"]
          }
        ],
        aggregations: [
          {
            name: "businessActions",
            singularName: "businessAction",
            type: "sap.ui.ux3.ThingAction",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons",
            methods: [
              "getBusinessActions",
              "destroyBusinessActions",
              "insertBusinessAction",
              "addBusinessAction",
              "removeBusinessAction",
              "indexOfBusinessAction",
              "removeAllBusinessActions"
            ]
          },
          {
            name: "_businessActionButtons",
            singularName: "_businessActionButton",
            type: "sap.ui.commons.Button",
            cardinality: "0..n",
            visibility: "hidden",
            description:
              "Buttons for the business actions - managed by this ActionBar",
            methods: [
              "get_businessActionButtons",
              "destroy_businessActionButtons",
              "insert_businessActionButton",
              "add_businessActionButton",
              "remove_businessActionButton",
              "indexOf_businessActionButton",
              "removeAll_businessActionButtons"
            ]
          },
          {
            name: "_socialActions",
            singularName: "_socialAction",
            type: "sap.ui.ux3.ThingAction",
            cardinality: "0..n",
            visibility: "hidden",
            description:
              "The social actions which are managed by this ActionBar",
            methods: [
              "get_socialActions",
              "destroy_socialActions",
              "insert_socialAction",
              "add_socialAction",
              "remove_socialAction",
              "indexOf_socialAction",
              "removeAll_socialActions"
            ]
          }
        ],
        events: [
          {
            name: "actionSelected",
            visibility: "public",
            description:
              "Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id\n\nFor ‘Update’, please refer to event ‘feedSubmit’",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of selected ThingAction"
              },
              action: {
                name: "action",
                type: "sap.ui.ux3.ThingAction",
                description: "Selected ThingAction"
              },
              newState: {
                name: "newState",
                type: "string",
                description:
                  "New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'"
              }
            },
            methods: [
              "attachActionSelected",
              "detachActionSelected",
              "fireActionSelected"
            ]
          },
          {
            name: "feedSubmit",
            visibility: "public",
            description: "Fired when a new feed entry is submitted.",
            parameters: {
              text: {
                name: "text",
                type: "string",
                description: "Feed text"
              }
            },
            methods: ["attachFeedSubmit", "detachFeedSubmit", "fireFeedSubmit"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ActionBar.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "actionSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "Id of selected ThingAction"
                    },
                    action: {
                      name: "action",
                      type: "sap.ui.ux3.ThingAction",
                      optional: false,
                      description: "Selected ThingAction"
                    },
                    newState: {
                      name: "newState",
                      type: "string",
                      optional: false,
                      description:
                        "New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id\n\nFor ‘Update’, please refer to event ‘feedSubmit’"
        },
        {
          name: "feedSubmit",
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
                    text: {
                      name: "text",
                      type: "string",
                      optional: false,
                      description: "Feed text"
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when a new feed entry is submitted."
        }
      ],
      methods: [
        {
          name: "attachActionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ActionBar</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ActionBar</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ActionBar</code> itself.\n\nFired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id\n\nFor ‘Update’, please refer to event ‘feedSubmit’"
        },
        {
          name: "attachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ActionBar</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ActionBar</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ActionBar</code> itself.\n\nFired when a new feed entry is submitted."
        },
        {
          name: "closePopups",
          visibility: "public",
          "ui5-metamodel": true,
          description:
            "Closes all popups which might be opened as ActionBar children These are the more- and follow menu and the feeder popup"
        },
        {
          name: "detachActionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ActionBar</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ActionBar</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ActionBar with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireActionSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of selected ThingAction"
                },
                action: {
                  name: "action",
                  type: "sap.ui.ux3.ThingAction",
                  optional: true,
                  description: "Selected ThingAction"
                },
                newState: {
                  name: "newState",
                  type: "string",
                  optional: true,
                  description:
                    "New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:actionSelected actionSelected} to attached listeners."
        },
        {
          name: "fireFeedSubmit",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                text: {
                  name: "text",
                  type: "string",
                  optional: true,
                  description: "Feed text"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:feedSubmit feedSubmit} to attached listeners."
        },
        {
          name: "getAlwaysShowMoreMenu",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>alwaysShowMoreMenu</code>"
          },
          description:
            "Gets current value of property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.\n\nIf true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getBusinessActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction[]"
          },
          description:
            "Gets content of aggregation {@link #getBusinessActions businessActions}.\n\nDisplayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons"
        },
        {
          name: "getDividerWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>dividerWidth</code>"
          },
          description:
            "Gets current value of property {@link #getDividerWidth dividerWidth}.\n\nThe minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area"
        },
        {
          name: "getFavoriteState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>favoriteState</code>"
          },
          description:
            "Gets current value of property {@link #getFavoriteState favoriteState}.\n\nIndicates whether “Favorite” is active"
        },
        {
          name: "getFlagState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flagState</code>"
          },
          description:
            "Gets current value of property {@link #getFlagState flagState}.\n\nIndicates whether “Mark for Follow Up” is active"
        },
        {
          name: "getFollowState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FollowActionState",
            description: "Value of property <code>followState</code>"
          },
          description:
            "Gets current value of property {@link #getFollowState followState}.\n\nKeeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default - FollowActionState.Follow - FollowActionState.Hold\n\nDefault value is <code>Default</code>."
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
            "Returns a metadata object for class sap.ui.ux3.ActionBar."
        },
        {
          name: "getShowFavorite",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFavorite</code>"
          },
          description:
            "Gets current value of property {@link #getShowFavorite showFavorite}.\n\nIndicates whether social action “Favorite” is shown, default is ‘true’\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowFlag",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFlag</code>"
          },
          description:
            "Gets current value of property {@link #getShowFlag showFlag}.\n\nIndicates whether social action “Mark for Follow Up” is shown, default is ‘true’\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowFollow",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFollow</code>"
          },
          description:
            "Gets current value of property {@link #getShowFollow showFollow}.\n\nIndicates whether social action “Follow” is shown, default is ‘true’\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowOpen",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showOpen</code>"
          },
          description:
            "Gets current value of property {@link #getShowOpen showOpen}.\n\nIndicates whether social action “Open” is shown, default is ‘true’\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowUpdate",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showUpdate</code>"
          },
          description:
            "Gets current value of property {@link #getShowUpdate showUpdate}.\n\nIndicates whether social action “Update” is shown, default is ‘true’\n\nDefault value is <code>true</code>."
        },
        {
          name: "getThingIconURI",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>thingIconURI</code>"
          },
          description:
            "Gets current value of property {@link #getThingIconURI thingIconURI}.\n\nThe thing icon uri. Icon will be displayed in Feeder"
        },
        {
          name: "getUpdateState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>updateState</code>"
          },
          description:
            "Gets current value of property {@link #getUpdateState updateState}.\n\nIndicates whether “Update” is active"
        },
        {
          name: "indexOfBusinessAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oBusinessAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The businessAction whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation {@link #getBusinessActions businessActions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "isActive",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "True if the control is still in the active DOM"
          },
          description:
            "Checks whether the control is still valid (is in the DOM). ActionBar instance is rendered if and only if 'isActive' returns 'true'. This check is called implicitely by the rendere, MUST not be removed."
        },
        {
          name: "setAlwaysShowMoreMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAlwaysShowMoreMenu",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>alwaysShowMoreMenu</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.\n\nIf true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setDividerWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDividerWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>dividerWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDividerWidth dividerWidth}.\n\nThe minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFavoriteState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFavoriteState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>favoriteState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFavoriteState favoriteState}.\n\nIndicates whether “Favorite” is active\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFlagState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlagState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>flagState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlagState flagState}.\n\nIndicates whether “Mark for Follow Up” is active\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFollowState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFollowState",
              type: "sap.ui.ux3.FollowActionState",
              optional: false,
              description: "New value for property <code>followState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFollowState followState}.\n\nKeeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default - FollowActionState.Follow - FollowActionState.Hold\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Default</code>."
        },
        {
          name: "setShowFavorite",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFavorite",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showFavorite</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowFavorite showFavorite}.\n\nIndicates whether social action “Favorite” is shown, default is ‘true’\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowFlag",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFlag",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showFlag</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowFlag showFlag}.\n\nIndicates whether social action “Mark for Follow Up” is shown, default is ‘true’\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowFollow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFollow",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showFollow</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowFollow showFollow}.\n\nIndicates whether social action “Follow” is shown, default is ‘true’\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowOpen",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowOpen",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showOpen</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowOpen showOpen}.\n\nIndicates whether social action “Open” is shown, default is ‘true’\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowUpdate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowUpdate",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showUpdate</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowUpdate showUpdate}.\n\nIndicates whether social action “Update” is shown, default is ‘true’\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setThingIconURI",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sThingIconURI",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>thingIconURI</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getThingIconURI thingIconURI}.\n\nThe thing icon uri. Icon will be displayed in Feeder\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setUpdateState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpdateState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>updateState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpdateState updateState}.\n\nIndicates whether “Update” is active\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.ActionBarSocialActions",
      basename: "ActionBarSocialActions",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "ActionBarSocialActions",
      static: true,
      visibility: "public",
      description:
        "Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function 'sap.ui.ux3.ActionBar.getSocialAction'.",
      experimental: {
        since: "1.2",
        text: "API is not yet finished and might change completely"
      },
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Favorite",
          visibility: "public",
          static: true,
          type: "string",
          description: "Standards action 'Mark as Favorite'"
        },
        {
          name: "Flag",
          visibility: "public",
          static: true,
          type: "string",
          description: "Standard action 'Mark for Follow up'"
        },
        {
          name: "Follow",
          visibility: "public",
          static: true,
          type: "string",
          description: "Standard action 'Follow/Unfollow'"
        },
        {
          name: "Open",
          visibility: "public",
          static: true,
          type: "string",
          description: "Standard action 'Open Thing Inspector'"
        },
        {
          name: "Update",
          visibility: "public",
          static: true,
          type: "string",
          description: "Standard action 'Create an update' (Feed)"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Collection",
      basename: "Collection",
      resource: "sap/ui/ux3/Collection.js",
      module: "sap/ui/ux3/Collection",
      export: "",
      static: true,
      visibility: "public",
      since: "1.9.0",
      extends: "sap.ui.core.Element",
      description: "Collection",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description: "Name for the collection",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "editable",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "If a collection is editable an edit button will be displayed below the list of items",
            methods: ["getEditable", "setEditable"]
          },
          {
            name: "multiSelection",
            type: "boolean",
            defaultValue: false,
            group: "Accessibility",
            visibility: "public",
            description: "Allow multi selection of items in collection",
            methods: ["getMultiSelection", "setMultiSelection"]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.ui.core.Item",
            cardinality: "0..n",
            visibility: "public",
            description: "Items in the collection",
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
        associations: [
          {
            name: "selectedItems",
            singularName: "selectedItem",
            type: "sap.ui.core.Item",
            cardinality: "0..n",
            visibility: "public",
            description: "Contains all items that are currently selected",
            methods: [
              "getSelectedItems",
              "addSelectedItem",
              "removeSelectedItem",
              "removeAllSelectedItems"
            ]
          }
        ],
        events: [
          {
            name: "selectionChanged",
            visibility: "public",
            description: "Fired when ever the selected items changer",
            methods: [
              "attachSelectionChanged",
              "detachSelectionChanged",
              "fireSelectionChanged"
            ]
          },
          {
            name: "propertyChanged",
            visibility: "public",
            description:
              "Fires if a property has changed, and the collection inspector needs to do something after that",
            methods: [
              "attachPropertyChanged",
              "detachPropertyChanged",
              "firePropertyChanged"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Collection.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "propertyChanged",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "Fires if a property has changed, and the collection inspector needs to do something after that"
        },
        {
          name: "selectionChanged",
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
                  optional: false
                }
              }
            }
          ],
          description: "Fired when ever the selected items changer"
        }
      ],
      methods: [
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.Item",
              optional: false,
              description: "The item to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some item to the aggregation {@link #getItems items}."
        },
        {
          name: "addSelectedItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "vSelectedItem",
              type: "string|sap.ui.core.Item",
              optional: false,
              description:
                "Id of a selectedItem which becomes an additional target of this <code>selectedItems</code> association. Alternatively, a selectedItem instance may be given."
            }
          ]
        },
        {
          name: "attachPropertyChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:propertyChanged propertyChanged} event of this <code>sap.ui.ux3.Collection</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Collection</code> itself.\n\nFires if a property has changed, and the collection inspector needs to do something after that"
        },
        {
          name: "attachSelectionChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.Collection</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Collection</code> itself.\n\nFired when ever the selected items changer"
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the items in the aggregation {@link #getItems items}."
        },
        {
          name: "detachPropertyChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:propertyChanged propertyChanged} event of this <code>sap.ui.ux3.Collection</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSelectionChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.Collection</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Collection with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "firePropertyChanged",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:propertyChanged propertyChanged} to attached listeners."
        },
        {
          name: "fireSelectionChanged",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:selectionChanged selectionChanged} to attached listeners."
        },
        {
          name: "getEditable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>editable</code>"
          },
          description:
            "Gets current value of property {@link #getEditable editable}.\n\nIf a collection is editable an edit button will be displayed below the list of items\n\nDefault value is <code>false</code>."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Item[]"
          },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nItems in the collection"
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
            "Returns a metadata object for class sap.ui.ux3.Collection."
        },
        {
          name: "getMultiSelection",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>multiSelection</code>"
          },
          description:
            "Gets current value of property {@link #getMultiSelection multiSelection}.\n\nAllow multi selection of items in collection\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSelectedItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]"
          },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getSelectedItems selectedItems}."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nName for the collection"
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
              type: "sap.ui.core.Item",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Item</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.Item",
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
            type: "sap.ui.core.Item[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllSelectedItems",
          visibility: "public",
          returnValue: {
            type: "string[]",
            description:
              "an array with the ids of the removed elements (might be empty)"
          }
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Item",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.ui.core.Item",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "removeSelectedItem",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "the id of the removed selectedItem or null"
          },
          parameters: [
            {
              name: "vSelectedItem",
              type: "int|string|sap.ui.core.Item",
              optional: false,
              description: "the selectedItem to remove or its index or id"
            }
          ]
        },
        {
          name: "setEditable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEditable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>editable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEditable editable}.\n\nIf a collection is editable an edit button will be displayed below the list of items\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setMultiSelection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMultiSelection",
              type: "boolean",
              optional: false,
              description: "New value for property <code>multiSelection</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMultiSelection multiSelection}.\n\nAllow multi selection of items in collection\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nName for the collection\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.CollectionInspector",
      basename: "CollectionInspector",
      resource: "sap/ui/ux3/CollectionInspector.js",
      module: "sap/ui/ux3/CollectionInspector",
      export: "",
      static: true,
      visibility: "public",
      since: "1.9.0",
      extends: "sap.ui.core.Control",
      description: "CollectionInspector",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "sidebarVisible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Defines if the list of collection items is visible on the left",
            methods: ["getSidebarVisible", "setSidebarVisible"]
          },
          {
            name: "fitParent",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "If set to true, control will fit parents content area",
            methods: ["getFitParent", "setFitParent"]
          }
        ],
        aggregations: [
          {
            name: "collections",
            singularName: "collection",
            type: "sap.ui.ux3.Collection",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Collections which are displayed in the COllectionInspector",
            methods: [
              "getCollections",
              "destroyCollections",
              "insertCollection",
              "addCollection",
              "removeCollection",
              "indexOfCollection",
              "removeAllCollections"
            ]
          },
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "All controls that are currently displayed",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        associations: [
          {
            name: "selectedCollection",
            singularName: "selectedCollection",
            type: "sap.ui.ux3.Collection",
            cardinality: "0..1",
            visibility: "public",
            description: "Collection which is currently selected",
            methods: ["getSelectedCollection", "setSelectedCollection"]
          }
        ],
        events: [
          {
            name: "collectionSelected",
            visibility: "public",
            description: "Event is fired if user selects a collection",
            methods: [
              "attachCollectionSelected",
              "detachCollectionSelected",
              "fireCollectionSelected"
            ]
          },
          {
            name: "itemSelectionChanged",
            visibility: "public",
            description: "Fires when an item in a collection is selected",
            methods: [
              "attachItemSelectionChanged",
              "detachItemSelectionChanged",
              "fireItemSelectionChanged"
            ]
          },
          {
            name: "editCollection",
            visibility: "public",
            description: "Fires when the edit button is clicked",
            methods: [
              "attachEditCollection",
              "detachEditCollection",
              "fireEditCollection"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new CollectionInspector.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "collectionSelected",
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
                  optional: false
                }
              }
            }
          ],
          description: "Event is fired if user selects a collection"
        },
        {
          name: "editCollection",
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
                  optional: false
                }
              }
            }
          ],
          description: "Fires when the edit button is clicked"
        },
        {
          name: "itemSelectionChanged",
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
                  optional: false
                }
              }
            }
          ],
          description: "Fires when an item in a collection is selected"
        }
      ],
      methods: [
        {
          name: "addCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "oCollection",
              type: "sap.ui.ux3.Collection",
              optional: false,
              description:
                "the collection to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some collection <code>oCollection</code> to the aggregation named <code>collections</code>."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "the content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content <code>oContent</code> to the aggregation named <code>content</code>."
        },
        {
          name: "attachCollectionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:collectionSelected collectionSelected} event of this <code>sap.ui.ux3.CollectionInspector</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.CollectionInspector</code> itself.\n\nEvent is fired if user selects a collection"
        },
        {
          name: "attachEditCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:editCollection editCollection} event of this <code>sap.ui.ux3.CollectionInspector</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.CollectionInspector</code> itself.\n\nFires when the edit button is clicked"
        },
        {
          name: "attachItemSelectionChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:itemSelectionChanged itemSelectionChanged} event of this <code>sap.ui.ux3.CollectionInspector</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.CollectionInspector</code> itself.\n\nFires when an item in a collection is selected"
        },
        {
          name: "closeSidebar",
          visibility: "public",
          description: "Closes the siedebar"
        },
        {
          name: "destroyCollections",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description: "this to allow method chaining"
          },
          description: "Destroys the collection aggregation"
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description: "<code>this</code> to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation named <code>content</code>."
        },
        {
          name: "detachCollectionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:collectionSelected collectionSelected} event of this <code>sap.ui.ux3.CollectionInspector</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachEditCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:editCollection editCollection} event of this <code>sap.ui.ux3.CollectionInspector</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachItemSelectionChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:itemSelectionChanged itemSelectionChanged} event of this <code>sap.ui.ux3.CollectionInspector</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.CollectionInspector with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireCollectionSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:collectionSelected collectionSelected} to attached listeners."
        },
        {
          name: "fireEditCollection",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:editCollection editCollection} to attached listeners."
        },
        {
          name: "fireItemSelectionChanged",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:itemSelectionChanged itemSelectionChanged} to attached listeners."
        },
        {
          name: "getCollections",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection[]"
          },
          description:
            "Gets content of aggregation {@link #getCollections collections}.\n\nCollections which are displayed in the COllectionInspector"
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nAll controls that are currently displayed"
        },
        {
          name: "getEditButton",
          visibility: "public",
          description: "Return the edit button"
        },
        {
          name: "getFitParent",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>fitParent</code>"
          },
          description:
            "Gets current value of property {@link #getFitParent fitParent}.\n\nIf set to true, control will fit parents content area\n\nDefault value is <code>true</code>."
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
            "Returns a metadata object for class sap.ui.ux3.CollectionInspector."
        },
        {
          name: "getSelectedCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedCollection selectedCollection}, or <code>null</code>."
        },
        {
          name: "getSidebarVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>sidebarVisible</code>"
          },
          description:
            "Gets current value of property {@link #getSidebarVisible sidebarVisible}.\n\nDefines if the list of collection items is visible on the left\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfCollection",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oCollection",
              type: "sap.ui.ux3.Collection",
              optional: false,
              description: "The collection whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.Collection</code> in the aggregation {@link #getCollections collections}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "oCollection",
              type: "sap.ui.ux3.Collection",
              optional: false,
              description:
                "the collection to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "the <code>0</code>-based index the collection should be inserted at; for a negative value of <code>iIndex</code>, the collection is inserted at position 0; for a value greater than the current size of the aggregation, the collection is inserted at the last position"
            }
          ],
          description:
            "Inserts a collection into the aggregation named <code>collections</code>."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "the content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "the <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation named <code>content</code>."
        },
        {
          name: "openSidebar",
          visibility: "public",
          description: "Opens the sidebar"
        },
        {
          name: "removeAllCollections",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection[]",
            description: "an array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the aggregation named <code>collections</code>.<br/> Additionally unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "an array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the aggregation named <code>content</code>.<br/> Additionally unregisters them from the hosting UIArea."
        },
        {
          name: "removeCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Collection",
            description: "the removed collection or null"
          },
          parameters: [
            {
              name: "vCollection",
              type: "int|string|sap.ui.ux3.Collection",
              optional: false,
              description: "the collection to remove or its index or id"
            }
          ],
          description:
            "Removes a collection from the aggregation named <code>collections</code>."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "the removed content or null"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "the content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation named <code>content</code>."
        },
        {
          name: "setFitParent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFitParent",
              type: "boolean",
              optional: false,
              description: "New value for property <code>fitParent</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFitParent fitParent}.\n\nIf set to true, control will fit parents content area\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSelectedCollection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedCollection",
              type: "sap.ui.core.ID|sap.ui.ux3.Collection",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedCollection association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedCollection selectedCollection}."
        },
        {
          name: "setSidebarVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.CollectionInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSidebarVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>sidebarVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSidebarVisible sidebarVisible}.\n\nDefines if the list of collection items is visible on the left\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.DataSet",
      basename: "DataSet",
      resource: "sap/ui/ux3/DataSet.js",
      module: "sap/ui/ux3/DataSet",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description: "DataSet",
      deprecated: {
        since: "1.38",
        text:
          "Use a container by choice from the {@link sap.m} library, instead."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showToolbar",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "show Toolbar",
            methods: ["getShowToolbar", "setShowToolbar"]
          },
          {
            name: "showFilter",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "show filter",
            methods: ["getShowFilter", "setShowFilter"]
          },
          {
            name: "showSearchField",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Show/hide SearchField in Toolbar",
            methods: ["getShowSearchField", "setShowSearchField"]
          },
          {
            name: "multiSelect",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description: "Selection mode of the DataSet",
            methods: ["getMultiSelect", "setMultiSelect"]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.ui.ux3.DataSetItem",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description: "Aggregation of DataSetItems",
            methods: [
              "getItems",
              "destroyItems",
              "insertItem",
              "addItem",
              "removeItem",
              "indexOfItem",
              "removeAllItems",
              "bindItems",
              "unbindItems"
            ]
          },
          {
            name: "views",
            singularName: "view",
            type: "sap.ui.ux3.DataSetView",
            cardinality: "0..n",
            visibility: "public",
            description: "views",
            methods: [
              "getViews",
              "destroyViews",
              "insertView",
              "addView",
              "removeView",
              "indexOfView",
              "removeAllViews"
            ]
          },
          {
            name: "filter",
            singularName: "filter",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Filter control (e.g. a FacetFilter) for the DataSet",
            methods: [
              "getFilter",
              "destroyFilter",
              "insertFilter",
              "addFilter",
              "removeFilter",
              "indexOfFilter",
              "removeAllFilter"
            ]
          },
          {
            name: "_viewSwitches",
            singularName: "_viewSwitch",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "hidden",
            description: "Internally managed by Dataset",
            methods: [
              "get_viewSwitches",
              "destroy_viewSwitches",
              "insert_viewSwitch",
              "add_viewSwitch",
              "remove_viewSwitch",
              "indexOf_viewSwitch",
              "removeAll_viewSwitches"
            ]
          },
          {
            name: "_toolbar",
            singularName: "_toolbar",
            type: "sap.ui.commons.Toolbar",
            cardinality: "0..1",
            visibility: "hidden",
            description: "A Toolbar, internally managed by Dataset",
            methods: ["get_toolbar", "destroy_toolbar", "set_toolbar"]
          }
        ],
        associations: [
          {
            name: "selectedView",
            singularName: "selectedView",
            type: "sap.ui.ux3.DataSetView",
            cardinality: "0..1",
            visibility: "public",
            description: "Selected view of the Dataset",
            methods: ["getSelectedView", "setSelectedView"]
          }
        ],
        events: [
          {
            name: "selectionChanged",
            visibility: "public",
            description: "selection Changed",
            parameters: {
              oldLeadSelectedIndex: {
                name: "oldLeadSelectedIndex",
                type: "int",
                description: "Old lead selected index"
              },
              newLeadSelectedIndex: {
                name: "newLeadSelectedIndex",
                type: "int",
                description: "New lead selected index"
              }
            },
            methods: [
              "attachSelectionChanged",
              "detachSelectionChanged",
              "fireSelectionChanged"
            ]
          },
          {
            name: "search",
            visibility: "public",
            description: "Event which is fired when the user triggers a search",
            parameters: {
              query: {
                name: "query",
                type: "string",
                description: "The search query"
              }
            },
            methods: ["attachSearch", "detachSearch", "fireSearch"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new DataSet.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "search",
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
                    query: {
                      name: "query",
                      type: "string",
                      optional: false,
                      description: "The search query"
                    }
                  }
                }
              }
            }
          ],
          description: "Event which is fired when the user triggers a search"
        },
        {
          name: "selectionChanged",
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
                    oldLeadSelectedIndex: {
                      name: "oldLeadSelectedIndex",
                      type: "int",
                      optional: false,
                      description: "Old lead selected index"
                    },
                    newLeadSelectedIndex: {
                      name: "newLeadSelectedIndex",
                      type: "int",
                      optional: false,
                      description: "New lead selected index"
                    }
                  }
                }
              }
            }
          ],
          description: "selection Changed"
        }
      ],
      methods: [
        {
          name: "_rerenderFilter",
          visibility: "protected",
          description: "Rerendering of the FilterArea"
        },
        {
          name: "_rerenderToolbar",
          visibility: "protected",
          description: "Rerendering of the Toolbar"
        },
        {
          name: "addFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFilter",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The filter to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some filter to the aggregation {@link #getFilter filter}."
        },
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.ux3.DataSetItem",
              optional: false,
              description: "The item to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some item to the aggregation {@link #getItems items}."
        },
        {
          name: "addToolbarItem",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "oOToolbarItem",
              type: "sap.ui.commons.ToolbarItem",
              optional: false,
              description: "ToolbarItem"
            }
          ],
          description: "add a toolbarItem to the toolbar"
        },
        {
          name: "addView",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oView",
              type: "sap.ui.ux3.DataSetView",
              optional: false,
              description: "The view to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some view to the aggregation {@link #getViews views}."
        },
        {
          name: "attachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.DataSet</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.DataSet</code> itself.\n\nEvent which is fired when the user triggers a search"
        },
        {
          name: "attachSelectionChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.DataSet</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.DataSet</code> itself.\n\nselection Changed"
        },
        {
          name: "bindItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
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
            "Binds aggregation {@link #getItems items} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "clearSelection",
          visibility: "public",
          description: "clears dataset from all previous selections"
        },
        {
          name: "createViewSwitch",
          visibility: "protected",
          returnValue: {
            type: "object",
            description: "viewSwitch instance"
          },
          parameters: [
            {
              name: "oView",
              type: "object",
              optional: false,
              description: "View"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "Index of view"
            }
          ],
          description: "Creates a view switch button"
        },
        {
          name: "destroyFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the filter in the aggregation {@link #getFilter filter}."
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the items in the aggregation {@link #getItems items}."
        },
        {
          name: "destroyViews",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the views in the aggregation {@link #getViews views}."
        },
        {
          name: "detachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.DataSet</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSelectionChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.DataSet</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.DataSet with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireSearch",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                query: {
                  name: "query",
                  type: "string",
                  optional: true,
                  description: "The search query"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:search search} to attached listeners."
        },
        {
          name: "fireSelectionChanged",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                oldLeadSelectedIndex: {
                  name: "oldLeadSelectedIndex",
                  type: "int",
                  optional: true,
                  description: "Old lead selected index"
                },
                newLeadSelectedIndex: {
                  name: "newLeadSelectedIndex",
                  type: "int",
                  optional: true,
                  description: "New lead selected index"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:selectionChanged selectionChanged} to attached listeners."
        },
        {
          name: "getFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getFilter filter}.\n\nFilter control (e.g. a FacetFilter) for the DataSet"
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem[]"
          },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nAggregation of DataSetItems"
        },
        {
          name: "getLeadSelection",
          visibility: "protected",
          "ui5-metamodel": true,
          returnValue: {
            type: "int",
            description: "selected index"
          },
          description: "Returns the LeadSelection index"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.ux3.DataSet."
        },
        {
          name: "getMultiSelect",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>multiSelect</code>"
          },
          description:
            "Gets current value of property {@link #getMultiSelect multiSelect}.\n\nSelection mode of the DataSet\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSelectedIndex",
          visibility: "public",
          description: "use this function to retrieve the lead selected index"
        },
        {
          name: "getSelectedIndices",
          visibility: "public",
          description:
            "use this function to retrieve all selected indices if multiple select is enabled"
        },
        {
          name: "getSelectedItemId",
          visibility: "protected",
          returnValue: {
            type: "string",
            description: "id of selected item"
          },
          parameters: [
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "index of selection"
            }
          ],
          description: "Returns id of selected Item from given index"
        },
        {
          name: "getSelectedView",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedView selectedView}, or <code>null</code>."
        },
        {
          name: "getShowFilter",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFilter</code>"
          },
          description:
            "Gets current value of property {@link #getShowFilter showFilter}.\n\nshow filter\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowSearchField",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSearchField</code>"
          },
          description:
            "Gets current value of property {@link #getShowSearchField showSearchField}.\n\nShow/hide SearchField in Toolbar\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowToolbar",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showToolbar</code>"
          },
          description:
            "Gets current value of property {@link #getShowToolbar showToolbar}.\n\nshow Toolbar\n\nDefault value is <code>true</code>."
        },
        {
          name: "getViews",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetView[]"
          },
          description:
            "Gets content of aggregation {@link #getViews views}.\n\nviews"
        },
        {
          name: "indexOfFilter",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFilter",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The filter whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFilter filter}. and returns its index if found or -1 otherwise."
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
              type: "sap.ui.ux3.DataSetItem",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.DataSetItem</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfView",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oView",
              type: "sap.ui.ux3.DataSetView",
              optional: false,
              description: "The view whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.DataSetView</code> in the aggregation {@link #getViews views}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFilter",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The filter to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the filter should be inserted at; for a negative value of <code>iIndex</code>, the filter is inserted at position 0; for a value greater than the current size of the aggregation, the filter is inserted at the last position"
            }
          ],
          description:
            "Inserts a filter into the aggregation {@link #getFilter filter}."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.ux3.DataSetItem",
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
          name: "insertView",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oView",
              type: "sap.ui.ux3.DataSetView",
              optional: false,
              description: "The view to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the view should be inserted at; for a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value greater than the current size of the aggregation, the view is inserted at the last position"
            }
          ],
          description:
            "Inserts a view into the aggregation {@link #getViews views}."
        },
        {
          name: "isSelectedIndex",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "index selected true/false"
          },
          parameters: [
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "index of selection"
            }
          ],
          description: "Returns true if iIndex is selected"
        },
        {
          name: "removeAllFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFilter filter}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllViews",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetView[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getViews views}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed filter or <code>null</code>"
          },
          parameters: [
            {
              name: "vFilter",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The filter to remove or its index or id"
            }
          ],
          description:
            "Removes a filter from the aggregation {@link #getFilter filter}."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.ui.ux3.DataSetItem",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "removeToolbarItem",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "oOToolbarItem",
              type: "sap.ui.commons.ToolbarItem",
              optional: false
            }
          ],
          description: "remove a toolbarItem to the toolbar"
        },
        {
          name: "removeView",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetView",
            description: "The removed view or <code>null</code>"
          },
          parameters: [
            {
              name: "vView",
              type: "int|string|sap.ui.ux3.DataSetView",
              optional: false,
              description: "The view to remove or its index or id"
            }
          ],
          description:
            "Removes a view from the aggregation {@link #getViews views}."
        },
        {
          name: "setLeadSelection",
          visibility: "protected",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "iIIndex",
              type: "int",
              optional: false,
              description: "set LeadSelection index"
            }
          ],
          description: "Set the LeadSelection index"
        },
        {
          name: "setMultiSelect",
          visibility: "public",
          parameters: [
            {
              name: "bMode",
              type: "boolean",
              optional: false,
              description: "true for multi mode, false for single mode"
            }
          ],
          description: "setter for multi selection mode"
        },
        {
          name: "setSelectedView",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedView",
              type: "sap.ui.core.ID|sap.ui.ux3.DataSetView",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedView association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedView selectedView}."
        },
        {
          name: "setShowFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFilter",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showFilter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowFilter showFilter}.\n\nshow filter\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowSearchField",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSearchField",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showSearchField</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSearchField showSearchField}.\n\nShow/hide SearchField in Toolbar\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowToolbar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowToolbar",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showToolbar</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowToolbar showToolbar}.\n\nshow Toolbar\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "unbindItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSet",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getItems items} from model data."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.DataSetItem",
      basename: "DataSetItem",
      resource: "sap/ui/ux3/DataSetItem.js",
      module: "sap/ui/ux3/DataSetItem",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description: "DataSet Item",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "iconSrc",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "image",
            methods: ["getIconSrc", "setIconSrc"]
          },
          {
            name: "title",
            type: "string",
            defaultValue: "Title",
            group: "Misc",
            visibility: "public",
            description: "title",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "checkable",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "checkable",
            methods: ["getCheckable", "setCheckable"]
          },
          {
            name: "subtitle",
            type: "string",
            defaultValue: "Subtitle",
            group: "Misc",
            visibility: "public",
            description: "subtitle",
            methods: ["getSubtitle", "setSubtitle"]
          }
        ],
        aggregations: [
          {
            name: "_template",
            singularName: "_template",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "The template control currently aggregated by this item and managed by the DataSet",
            methods: ["get_template", "destroy_template", "set_template"]
          }
        ],
        events: [
          {
            name: "selected",
            visibility: "public",
            description: "Event Fired when Datset item is selected.",
            parameters: {
              itemId: {
                name: "itemId",
                type: "string",
                description: "Id of the selected Datset item"
              }
            },
            methods: ["attachSelected", "detachSelected", "fireSelected"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new DataSetItem.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "selected",
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
                    itemId: {
                      name: "itemId",
                      type: "string",
                      optional: false,
                      description: "Id of the selected Datset item"
                    }
                  }
                }
              }
            }
          ],
          description: "Event Fired when Datset item is selected."
        }
      ],
      methods: [
        {
          name: "attachSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSetItem</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:selected selected} event of this <code>sap.ui.ux3.DataSetItem</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.DataSetItem</code> itself.\n\nEvent Fired when Datset item is selected."
        },
        {
          name: "detachSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:selected selected} event of this <code>sap.ui.ux3.DataSetItem</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.DataSetItem with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "fireSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                itemId: {
                  name: "itemId",
                  type: "string",
                  optional: true,
                  description: "Id of the selected Datset item"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:selected selected} to attached listeners."
        },
        {
          name: "getCheckable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>checkable</code>"
          },
          description:
            "Gets current value of property {@link #getCheckable checkable}.\n\ncheckable\n\nDefault value is <code>true</code>."
        },
        {
          name: "getIconSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>iconSrc</code>"
          },
          description:
            "Gets current value of property {@link #getIconSrc iconSrc}.\n\nimage"
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
            "Returns a metadata object for class sap.ui.ux3.DataSetItem."
        },
        {
          name: "getSubtitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>subtitle</code>"
          },
          description:
            "Gets current value of property {@link #getSubtitle subtitle}.\n\nsubtitle\n\nDefault value is <code>Subtitle</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\ntitle\n\nDefault value is <code>Title</code>."
        },
        {
          name: "setCheckable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bCheckable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>checkable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCheckable checkable}.\n\ncheckable\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIconSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIconSrc",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>iconSrc</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIconSrc iconSrc}.\n\nimage\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSubtitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSubtitle",
              type: "string",
              optional: false,
              description: "New value for property <code>subtitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSubtitle subtitle}.\n\nsubtitle\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Subtitle</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\ntitle\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Title</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.DataSetSimpleView",
      basename: "DataSetSimpleView",
      resource: "sap/ui/ux3/DataSetSimpleView.js",
      module: "sap/ui/ux3/DataSetSimpleView",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      implements: ["sap.ui.ux3.DataSetView"],
      description:
        "DataSetSimpleView provides a simple view example for DataSet usage.",
      deprecated: {
        since: "1.38",
        text: "Use a layout by choice from the {@link sap.m} library, instead."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "floating",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.",
            methods: ["getFloating", "setFloating"]
          },
          {
            name: "name",
            type: "string",
            defaultValue: "Name of this View",
            group: "Misc",
            visibility: "public",
            description: "Name of the View",
            methods: ["getName", "setName"]
          },
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Icon source for this view",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "iconHovered",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "icon: hovered state",
            methods: ["getIconHovered", "setIconHovered"]
          },
          {
            name: "iconSelected",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "icon: selected state",
            methods: ["getIconSelected", "setIconSelected"]
          },
          {
            name: "responsive",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.9.2",
            description:
              "When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.",
            methods: ["getResponsive", "setResponsive"]
          },
          {
            name: "itemMinWidth",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.9.2",
            description:
              "When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.",
            methods: ["getItemMinWidth", "setItemMinWidth"]
          },
          {
            name: "initialItemCount",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            since: "1.13.0",
            description:
              'If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"',
            methods: ["getInitialItemCount", "setInitialItemCount"]
          },
          {
            name: "reloadItemCount",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            since: "1.13.0",
            description:
              "This number defines the item count which is reloaded on scroll if initialItemCount is enabled.",
            methods: ["getReloadItemCount", "setReloadItemCount"]
          },
          {
            name: "scrollArea",
            type: "any",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.13.0",
            description:
              "ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset",
            methods: ["getScrollArea", "setScrollArea"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.13.0",
            description:
              "If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.",
            methods: ["getHeight", "setHeight"]
          }
        ],
        aggregations: [
          {
            name: "template",
            singularName: "template",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description: "template",
            methods: ["getTemplate", "destroyTemplate", "setTemplate"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new DataSetSimpleView.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "destroyTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the template in the aggregation {@link #getTemplate template}."
        },
        {
          name: "exitView",
          visibility: "protected",
          parameters: [
            {
              name: "aItems",
              type: "sap.ui.ux3.DataSetItem[]",
              optional: false
            }
          ],
          description: "View finalization: Called when leaving the view"
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
            "Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getFloating",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>floating</code>"
          },
          description:
            "Gets current value of property {@link #getFloating floating}.\n\nWhen true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getHeight",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\nIf the pagination feature is used without specifying a scroll area, a height for the dataset must be defined."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nIcon source for this view"
        },
        {
          name: "getIconHovered",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>iconHovered</code>"
          },
          description:
            "Gets current value of property {@link #getIconHovered iconHovered}.\n\nicon: hovered state"
        },
        {
          name: "getIconSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>iconSelected</code>"
          },
          description:
            "Gets current value of property {@link #getIconSelected iconSelected}.\n\nicon: selected state"
        },
        {
          name: "getInitialItemCount",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>initialItemCount</code>"
          },
          description:
            'Gets current value of property {@link #getInitialItemCount initialItemCount}.\n\nIf this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"\n\nDefault value is <code>0</code>.'
        },
        {
          name: "getItemMinWidth",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "int",
            description: "Value of property <code>itemMinWidth</code>"
          },
          description:
            "Gets current value of property {@link #getItemMinWidth itemMinWidth}.\n\nWhen itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.\n\nDefault value is <code>0</code>."
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
            "Returns a metadata object for class sap.ui.ux3.DataSetSimpleView."
        },
        {
          name: "getName",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>name</code>"
          },
          description:
            "Gets current value of property {@link #getName name}.\n\nName of the View\n\nDefault value is <code>Name of this View</code>."
        },
        {
          name: "getReloadItemCount",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>reloadItemCount</code>"
          },
          description:
            "Gets current value of property {@link #getReloadItemCount reloadItemCount}.\n\nThis number defines the item count which is reloaded on scroll if initialItemCount is enabled.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getResponsive",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>responsive</code>"
          },
          description:
            "Gets current value of property {@link #getResponsive responsive}.\n\nWhen true and the property floating is true the DatSet items are floating containers filling the whole space of a row.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getScrollArea",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "any",
            description: "Value of property <code>scrollArea</code>"
          },
          description:
            "Gets current value of property {@link #getScrollArea scrollArea}.\n\nID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset"
        },
        {
          name: "getTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control"
          },
          description:
            "Gets content of aggregation {@link #getTemplate template}.\n\ntemplate"
        },
        {
          name: "handleSelection",
          visibility: "protected",
          parameters: [
            {
              name: "oEvent",
              type: "sap.ui.base.Event",
              optional: false,
              description: "SelectionChanged event"
            }
          ],
          description: "Eventhandler for the selection of an Item"
        },
        {
          name: "initView",
          visibility: "protected",
          parameters: [
            {
              name: "aItems",
              type: "array",
              optional: false,
              description: "Array of DataSetItems added to the parent DataSet"
            }
          ],
          description: "View Initialization: Called when selecting the view"
        },
        {
          name: "isItemSelected",
          visibility: "protected",
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.ux3.DataSetItem",
              optional: false,
              description: "DataSetItem instance"
            }
          ],
          description: "Check if Item <code>oItem</code> is selected"
        },
        {
          name: "setFloating",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFloating",
              type: "boolean",
              optional: false,
              description: "New value for property <code>floating</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFloating floating}.\n\nWhen true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setHeight",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\nIf the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
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
            "Sets a new value for property {@link #getIcon icon}.\n\nIcon source for this view\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIconHovered",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIconHovered",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>iconHovered</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIconHovered iconHovered}.\n\nicon: hovered state\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIconSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIconSelected",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>iconSelected</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIconSelected iconSelected}.\n\nicon: selected state\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setInitialItemCount",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iInitialItemCount",
              type: "int",
              optional: false,
              description:
                "New value for property <code>initialItemCount</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getInitialItemCount initialItemCount}.\n\nIf this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>.'
        },
        {
          name: "setItemMinWidth",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iItemMinWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>itemMinWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getItemMinWidth itemMinWidth}.\n\nWhen itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setName",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sName",
              type: "string",
              optional: false,
              description: "New value for property <code>name</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getName name}.\n\nName of the View\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Name of this View</code>."
        },
        {
          name: "setReloadItemCount",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iReloadItemCount",
              type: "int",
              optional: false,
              description: "New value for property <code>reloadItemCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getReloadItemCount reloadItemCount}.\n\nThis number defines the item count which is reloaded on scroll if initialItemCount is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setResponsive",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bResponsive",
              type: "boolean",
              optional: false,
              description: "New value for property <code>responsive</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResponsive responsive}.\n\nWhen true and the property floating is true the DatSet items are floating containers filling the whole space of a row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setScrollArea",
          visibility: "public",
          parameters: [
            {
              name: "aScrollArea",
              type: "any[]",
              optional: false
            },
            {
              name: "bSupress",
              type: "boolean",
              optional: false
            }
          ]
        },
        {
          name: "setTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.DataSetSimpleView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTemplate",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The template to set"
            }
          ],
          description: "Sets the aggregated {@link #getTemplate template}."
        },
        {
          name: "updateView",
          visibility: "protected",
          parameters: [
            {
              name: "aDiff",
              type: "sap.ui.ux3.DataSetItem[]",
              optional: false,
              description: "Array of DataSetItems added to the parent DataSet"
            }
          ],
          description: "View update: Called when pagination adds items"
        }
      ]
    },
    {
      kind: "interface",
      name: "sap.ui.ux3.DataSetView",
      basename: "DataSetView",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      static: true,
      visibility: "public",
      description:
        "Marker interface for controls which are suitable as view rendering for a DataSet.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Exact",
      basename: "Exact",
      resource: "sap/ui/ux3/Exact.js",
      module: "sap/ui/ux3/Exact",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        'A comprehensive UI design approach with graphical and functional elements for searching data, exploring data, and acting on the data ("Explore and Act (Exact) Pattern").',
      experimental: {
        since: "1.2",
        text: "API is not yet finished and might change completely"
      },
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "resultText",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "A title text which is displayed above the result section",
            methods: ["getResultText", "setResultText"]
          }
        ],
        aggregations: [
          {
            name: "settingsMenu",
            singularName: "settingsMenu",
            type: "sap.ui.commons.Menu",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Defines the 'Settings' button in the browse section tool bar",
            methods: [
              "getSettingsMenu",
              "destroySettingsMenu",
              "setSettingsMenu"
            ]
          },
          {
            name: "attributes",
            singularName: "attribute",
            type: "sap.ui.ux3.ExactAttribute",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The attributes which shall be available to refine the search",
            methods: [
              "getAttributes",
              "destroyAttributes",
              "insertAttribute",
              "addAttribute",
              "removeAttribute",
              "indexOfAttribute",
              "removeAllAttributes"
            ]
          },
          {
            name: "controls",
            singularName: "control",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "hidden",
            description: "Controls managed by the Exact control",
            methods: [
              "getControls",
              "destroyControls",
              "insertControl",
              "addControl",
              "removeControl",
              "indexOfControl",
              "removeAllControls"
            ]
          }
        ],
        defaultAggregation: "attributes",
        events: [
          {
            name: "search",
            visibility: "public",
            description: "Event is fired when the search button is clicked",
            parameters: {
              query: {
                name: "query",
                type: "string",
                description:
                  "The query string which was entered in the search field."
              }
            },
            methods: ["attachSearch", "detachSearch", "fireSearch"]
          },
          {
            name: "refineSearch",
            visibility: "public",
            description:
              "Event which is fired when an attribute is selected or unselected.",
            parameters: {
              query: {
                name: "query",
                type: "string",
                description:
                  "The query string which was entered in the search field"
              },
              changedAttribute: {
                name: "changedAttribute",
                type: "sap.ui.ux3.ExactAttribute",
                description:
                  "The attribute which was selected or unselected recently"
              },
              allSelectedAttributes: {
                name: "allSelectedAttributes",
                type: "object",
                description: "Array of all selected ExcatAttribute."
              }
            },
            methods: [
              "attachRefineSearch",
              "detachRefineSearch",
              "fireRefineSearch"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Exact.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "refineSearch",
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
                    query: {
                      name: "query",
                      type: "string",
                      optional: false,
                      description:
                        "The query string which was entered in the search field"
                    },
                    changedAttribute: {
                      name: "changedAttribute",
                      type: "sap.ui.ux3.ExactAttribute",
                      optional: false,
                      description:
                        "The attribute which was selected or unselected recently"
                    },
                    allSelectedAttributes: {
                      name: "allSelectedAttributes",
                      type: "object",
                      optional: false,
                      description: "Array of all selected ExcatAttribute."
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event which is fired when an attribute is selected or unselected."
        },
        {
          name: "search",
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
                    query: {
                      name: "query",
                      type: "string",
                      optional: false,
                      description:
                        "The query string which was entered in the search field."
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the search button is clicked"
        }
      ],
      methods: [
        {
          name: "addAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some attribute to the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "attachRefineSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:refineSearch refineSearch} event of this <code>sap.ui.ux3.Exact</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Exact</code> itself.\n\nEvent which is fired when an attribute is selected or unselected."
        },
        {
          name: "attachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.Exact</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Exact</code> itself.\n\nEvent is fired when the search button is clicked"
        },
        {
          name: "destroyAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the attributes in the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "destroySettingsMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the settingsMenu in the aggregation {@link #getSettingsMenu settingsMenu}."
        },
        {
          name: "detachRefineSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:refineSearch refineSearch} event of this <code>sap.ui.ux3.Exact</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.Exact</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Exact with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireRefineSearch",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                query: {
                  name: "query",
                  type: "string",
                  optional: true,
                  description:
                    "The query string which was entered in the search field"
                },
                changedAttribute: {
                  name: "changedAttribute",
                  type: "sap.ui.ux3.ExactAttribute",
                  optional: true,
                  description:
                    "The attribute which was selected or unselected recently"
                },
                allSelectedAttributes: {
                  name: "allSelectedAttributes",
                  type: "object",
                  optional: true,
                  description: "Array of all selected ExcatAttribute."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:refineSearch refineSearch} to attached listeners."
        },
        {
          name: "fireSearch",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                query: {
                  name: "query",
                  type: "string",
                  optional: true,
                  description:
                    "The query string which was entered in the search field."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:search search} to attached listeners."
        },
        {
          name: "getAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute[]"
          },
          description:
            "Gets content of aggregation {@link #getAttributes attributes}.\n\nThe attributes which shall be available to refine the search"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.ux3.Exact."
        },
        {
          name: "getResultArea",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.ux3.ExactArea"
          },
          description:
            "Returns the ExactArea representing the result section. Arbitrary content can be added here."
        },
        {
          name: "getResultText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>resultText</code>"
          },
          description:
            "Gets current value of property {@link #getResultText resultText}.\n\nA title text which is displayed above the result section"
        },
        {
          name: "getSearchField",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.commons.SearchField"
          },
          description:
            "Returns the SearchField control which is used by the Exact control."
        },
        {
          name: "getSettingsMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.Menu"
          },
          description:
            "Gets content of aggregation {@link #getSettingsMenu settingsMenu}.\n\nDefines the 'Settings' button in the browse section tool bar"
        },
        {
          name: "indexOfAttribute",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description:
                "The attribute to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the attribute should be inserted at; for a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value greater than the current size of the aggregation, the attribute is inserted at the last position"
            }
          ],
          description:
            "Inserts a attribute into the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "removeAllAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getAttributes attributes}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description: "The removed attribute or <code>null</code>"
          },
          parameters: [
            {
              name: "vAttribute",
              type: "int|string|sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute to remove or its index or id"
            }
          ],
          description:
            "Removes a attribute from the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "setResultText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sResultText",
              type: "string",
              optional: false,
              description: "New value for property <code>resultText</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResultText resultText}.\n\nA title text which is displayed above the result section\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSettingsMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Exact",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSettingsMenu",
              type: "sap.ui.commons.Menu",
              optional: false,
              description: "The settingsMenu to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSettingsMenu settingsMenu}."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ExactArea",
      basename: "ExactArea",
      resource: "sap/ui/ux3/ExactArea.js",
      module: "sap/ui/ux3/ExactArea",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "Consists of two sections: A tool bar and a content area where arbitrary controls can be added. The ExactArea is intended to be used for the Exact design approach but alternatively also in a stand alone version.",
      experimental: {
        since: "1.6",
        text: "API is not yet finished and might change completely"
      },
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "toolbarVisible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "Specifies whether the tool bar shall be visible",
            methods: ["getToolbarVisible", "setToolbarVisible"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Arbitrary child controls of the content area",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "toolbarItems",
            singularName: "toolbarItem",
            type: "sap.ui.commons.ToolbarItem",
            cardinality: "0..n",
            visibility: "public",
            description: "Tool bar items which shall be shown in the tool bar.",
            methods: [
              "getToolbarItems",
              "destroyToolbarItems",
              "insertToolbarItem",
              "addToolbarItem",
              "removeToolbarItem",
              "indexOfToolbarItem",
              "removeAllToolbarItems"
            ]
          }
        ],
        defaultAggregation: "content"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ExactArea.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "addToolbarItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolbarItem",
              type: "sap.ui.commons.ToolbarItem",
              optional: false,
              description:
                "The toolbarItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some toolbarItem to the aggregation {@link #getToolbarItems toolbarItems}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyToolbarItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the toolbarItems in the aggregation {@link #getToolbarItems toolbarItems}."
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
            "Creates a new subclass of class sap.ui.ux3.ExactArea with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nArbitrary child controls of the content area"
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
            "Returns a metadata object for class sap.ui.ux3.ExactArea."
        },
        {
          name: "getToolbarItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.ToolbarItem[]"
          },
          description:
            "Gets content of aggregation {@link #getToolbarItems toolbarItems}.\n\nTool bar items which shall be shown in the tool bar."
        },
        {
          name: "getToolbarVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>toolbarVisible</code>"
          },
          description:
            "Gets current value of property {@link #getToolbarVisible toolbarVisible}.\n\nSpecifies whether the tool bar shall be visible\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfToolbarItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oToolbarItem",
              type: "sap.ui.commons.ToolbarItem",
              optional: false,
              description: "The toolbarItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation {@link #getToolbarItems toolbarItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "insertToolbarItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolbarItem",
              type: "sap.ui.commons.ToolbarItem",
              optional: false,
              description:
                "The toolbarItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the toolbarItem should be inserted at; for a negative value of <code>iIndex</code>, the toolbarItem is inserted at position 0; for a value greater than the current size of the aggregation, the toolbarItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a toolbarItem into the aggregation {@link #getToolbarItems toolbarItems}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllToolbarItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.ToolbarItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getToolbarItems toolbarItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "removeToolbarItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.ToolbarItem",
            description: "The removed toolbarItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vToolbarItem",
              type: "int|string|sap.ui.commons.ToolbarItem",
              optional: false,
              description: "The toolbarItem to remove or its index or id"
            }
          ],
          description:
            "Removes a toolbarItem from the aggregation {@link #getToolbarItems toolbarItems}."
        },
        {
          name: "setToolbarVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactArea",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bToolbarVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>toolbarVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getToolbarVisible toolbarVisible}.\n\nSpecifies whether the tool bar shall be visible\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ExactAttribute",
      basename: "ExactAttribute",
      resource: "sap/ui/ux3/ExactAttribute.js",
      module: "sap/ui/ux3/ExactAttribute",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description:
        "An element for defining attributes and sub-attributes used within the Exact pattern.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The attribute name",
            methods: ["getText", "setText"]
          },
          {
            name: "selected",
            type: "boolean",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Specifies whether the attribute shall be selected",
            methods: ["getSelected", "setSelected"]
          },
          {
            name: "width",
            type: "int",
            defaultValue: 168,
            group: "Misc",
            visibility: "public",
            since: "1.7.0",
            description:
              "Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "listOrder",
            type: "sap.ui.ux3.ExactOrder",
            defaultValue: "Select",
            group: "Misc",
            visibility: "public",
            since: "1.7.1",
            description:
              "The order how the sublists of this attribute should be displayed.",
            methods: ["getListOrder", "setListOrder"]
          },
          {
            name: "showSubAttributesIndicator",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is considered then and has to be maintained. If the back-end does not support count-calls, for example, showSubAttributesIndicator should be set to true.",
            methods: [
              "getShowSubAttributesIndicator",
              "setShowSubAttributesIndicator"
            ]
          },
          {
            name: "additionalData",
            type: "object",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "An example for additional data are database keys",
            methods: ["getAdditionalData", "setAdditionalData"]
          },
          {
            name: "supplyActive",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false. The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.",
            methods: ["getSupplyActive", "setSupplyActive"]
          },
          {
            name: "autoActivateSupply",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically set to true on every unselect.",
            methods: ["getAutoActivateSupply", "setAutoActivateSupply"]
          }
        ],
        aggregations: [
          {
            name: "attributes",
            singularName: "attribute",
            type: "sap.ui.ux3.ExactAttribute",
            cardinality: "0..n",
            visibility: "public",
            description: "Values (sub attributes) of this attribute",
            methods: [
              "getAttributes",
              "destroyAttributes",
              "insertAttribute",
              "addAttribute",
              "removeAttribute",
              "indexOfAttribute",
              "removeAllAttributes"
            ]
          }
        ],
        defaultAggregation: "attributes",
        events: [
          {
            name: "supplyAttributes",
            visibility: "public",
            description:
              "A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called.",
            parameters: {
              attribute: {
                name: "attribute",
                type: "sap.ui.ux3.ExactAttribute",
                description: "The ExactAttribute"
              }
            },
            methods: [
              "attachSupplyAttributes",
              "detachSupplyAttributes",
              "fireSupplyAttributes"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ExactAttribute.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "supplyAttributes",
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
                    attribute: {
                      name: "attribute",
                      type: "sap.ui.ux3.ExactAttribute",
                      optional: false,
                      description: "The ExactAttribute"
                    }
                  }
                }
              }
            }
          ],
          description:
            "A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called."
        }
      ],
      methods: [
        {
          name: "addAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some attribute to the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "attachSupplyAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactAttribute</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:supplyAttributes supplyAttributes} event of this <code>sap.ui.ux3.ExactAttribute</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ExactAttribute</code> itself.\n\nA supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called."
        },
        {
          name: "destroyAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the attributes in the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "detachSupplyAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:supplyAttributes supplyAttributes} event of this <code>sap.ui.ux3.ExactAttribute</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ExactAttribute with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "fireSupplyAttributes",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                attribute: {
                  name: "attribute",
                  type: "sap.ui.ux3.ExactAttribute",
                  optional: true,
                  description: "The ExactAttribute"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:supplyAttributes supplyAttributes} to attached listeners."
        },
        {
          name: "getAdditionalData",
          visibility: "public",
          returnValue: {
            type: "object",
            description: "Value of property <code>additionalData</code>"
          },
          description:
            "Gets current value of property {@link #getAdditionalData additionalData}.\n\nAn example for additional data are database keys"
        },
        {
          name: "getAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute[]"
          },
          description:
            "Gets content of aggregation {@link #getAttributes attributes}.\n\nValues (sub attributes) of this attribute"
        },
        {
          name: "getAutoActivateSupply",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>autoActivateSupply</code>"
          },
          description:
            "Gets current value of property {@link #getAutoActivateSupply autoActivateSupply}.\n\nIf you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically set to true on every unselect.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getListOrder",
          visibility: "public",
          since: "1.7.1",
          returnValue: {
            type: "sap.ui.ux3.ExactOrder",
            description: "Value of property <code>listOrder</code>"
          },
          description:
            "Gets current value of property {@link #getListOrder listOrder}.\n\nThe order how the sublists of this attribute should be displayed.\n\nDefault value is <code>Select</code>."
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
            "Returns a metadata object for class sap.ui.ux3.ExactAttribute."
        },
        {
          name: "getSelected",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>selected</code>"
          },
          description:
            "Gets current value of property {@link #getSelected selected}.\n\nSpecifies whether the attribute shall be selected"
        },
        {
          name: "getShowSubAttributesIndicator",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>showSubAttributesIndicator</code>"
          },
          description:
            "Gets current value of property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.\n\nSpecifies whether the attribute shall have sub values for visual purposes. The indicator which is a little arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is considered then and has to be maintained. If the back-end does not support count-calls, for example, showSubAttributesIndicator should be set to true.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowSubAttributesIndicator_Computed",
          visibility: "public",
          "ui5-metamodel": true,
          description: "See attribute showSubAttributesIndicator"
        },
        {
          name: "getSupplyActive",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>supplyActive</code>"
          },
          description:
            "Gets current value of property {@link #getSupplyActive supplyActive}.\n\nThe supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false. The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nThe attribute name"
        },
        {
          name: "getWidth",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nSpecifies the width of the corresponding list in pixels. The value must be between 70 and 500.\n\nDefault value is <code>168</code>."
        },
        {
          name: "indexOfAttribute",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description:
                "The attribute to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the attribute should be inserted at; for a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value greater than the current size of the aggregation, the attribute is inserted at the last position"
            }
          ],
          description:
            "Inserts a attribute into the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "removeAllAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getAttributes attributes}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description: "The removed attribute or <code>null</code>"
          },
          parameters: [
            {
              name: "vAttribute",
              type: "int|string|sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute to remove or its index or id"
            }
          ],
          description:
            "Removes a attribute from the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "scrollTo",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "oOAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The direct child attribute"
            }
          ],
          description:
            "Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If the corresponding list is not yet visible the call is buffered until the list is available."
        },
        {
          name: "setAdditionalData",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAdditionalData",
              type: "object",
              optional: false,
              description: "New value for property <code>additionalData</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAdditionalData additionalData}.\n\nAn example for additional data are database keys\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setAutoActivateSupply",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAutoActivateSupply",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>autoActivateSupply</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAutoActivateSupply autoActivateSupply}.\n\nIf you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically set to true on every unselect.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setListOrder",
          visibility: "public",
          since: "1.7.1",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sListOrder",
              type: "sap.ui.ux3.ExactOrder",
              optional: false,
              description: "New value for property <code>listOrder</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getListOrder listOrder}.\n\nThe order how the sublists of this attribute should be displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Select</code>."
        },
        {
          name: "setProperty",
          visibility: "protected",
          parameters: [
            {
              name: "sPropertyName",
              type: "string",
              optional: false
            },
            {
              name: "oValue",
              type: "object",
              optional: false
            },
            {
              name: "bSuppressRerendering",
              type: "boolean",
              optional: false
            }
          ],
          references: ["sap.ui.base.ManagedObject.prototype.setProperty"]
        },
        {
          name: "setSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSelected",
              type: "boolean",
              optional: false,
              description: "New value for property <code>selected</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSelected selected}.\n\nSpecifies whether the attribute shall be selected\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setShowSubAttributesIndicator",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSubAttributesIndicator",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showSubAttributesIndicator</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.\n\nSpecifies whether the attribute shall have sub values for visual purposes. The indicator which is a little arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is considered then and has to be maintained. If the back-end does not support count-calls, for example, showSubAttributesIndicator should be set to true.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSupplyActive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSupplyActive",
              type: "boolean",
              optional: false,
              description: "New value for property <code>supplyActive</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSupplyActive supplyActive}.\n\nThe supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false. The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
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
            "Sets a new value for property {@link #getText text}.\n\nThe attribute name\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTooltip",
          visibility: "public",
          parameters: [
            {
              name: "oTooltip",
              type: "string|sap.ui.core.TooltipBase",
              optional: false
            }
          ],
          references: ["sap.ui.core.Element.prototype.setTooltip"]
        },
        {
          name: "setWidth",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nSpecifies the width of the corresponding list in pixels. The value must be between 70 and 500.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>168</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ExactBrowser",
      basename: "ExactBrowser",
      resource: "sap/ui/ux3/ExactBrowser.js",
      module: "sap/ui/ux3/ExactBrowser",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility when large data amounts shall be displayed in the form of structured data sets with a high or low interdependency level. From lists - which can be nested according to the defined attributes - the user can choose entries and thereby trigger the display of further information, depending on the chosen entry/entries (multiple selection supported).",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "headerTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Title text in the header of the Exact Browser.",
            methods: ["getHeaderTitle", "setHeaderTitle"]
          },
          {
            name: "topListOrder",
            type: "sap.ui.ux3.ExactOrder",
            defaultValue: "Select",
            group: "Misc",
            visibility: "public",
            since: "1.7.1",
            description:
              "The order how the sublists of the top level list should be displayed.",
            methods: ["getTopListOrder", "setTopListOrder"]
          },
          {
            name: "enableListClose",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Enables the close icons of the displayed lists.",
            methods: ["getEnableListClose", "setEnableListClose"]
          },
          {
            name: "listHeight",
            type: "int",
            defaultValue: 290,
            group: "Appearance",
            visibility: "public",
            description: "The height of the list area in px.",
            methods: ["getListHeight", "setListHeight"]
          },
          {
            name: "showHeader",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the header area of the ExactBrowser should be shown.",
            methods: ["getShowHeader", "setShowHeader"]
          },
          {
            name: "showTopList",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            since: "1.7.0",
            description:
              "Whether the top list of the ExactBrowser should be shown. When the property is set to false the application must ensure to select top level attributes appropriately.",
            methods: ["getShowTopList", "setShowTopList"]
          },
          {
            name: "enableReset",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the reset functionality should be available in the header area.",
            methods: ["getEnableReset", "setEnableReset"]
          },
          {
            name: "enableSave",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.9.2",
            description:
              "Whether the save button should be available in the header area.",
            methods: ["getEnableSave", "setEnableSave"]
          },
          {
            name: "topListWidth",
            type: "int",
            defaultValue: 168,
            group: "Misc",
            visibility: "public",
            since: "1.7.0",
            description:
              "Specifies the width of the top list in pixels. The value must be between 70 and 500.",
            methods: ["getTopListWidth", "setTopListWidth"]
          }
        ],
        aggregations: [
          {
            name: "attributes",
            singularName: "attribute",
            type: "sap.ui.ux3.ExactAttribute",
            cardinality: "0..n",
            visibility: "public",
            description: "The attributes which shall be available.",
            methods: [
              "getAttributes",
              "destroyAttributes",
              "insertAttribute",
              "addAttribute",
              "removeAttribute",
              "indexOfAttribute",
              "removeAllAttributes"
            ]
          },
          {
            name: "optionsMenu",
            singularName: "optionsMenu",
            type: "sap.ui.commons.Menu",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Menu with options. The menu can not used when the property showTopList is set to false.",
            methods: ["getOptionsMenu", "destroyOptionsMenu", "setOptionsMenu"]
          },
          {
            name: "controls",
            singularName: "control",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "hidden",
            description: "Controls managed by this ExactBrowser",
            methods: [
              "getControls",
              "destroyControls",
              "insertControl",
              "addControl",
              "removeControl",
              "indexOfControl",
              "removeAllControls"
            ]
          },
          {
            name: "rootAttribute",
            singularName: "rootAttribute",
            type: "sap.ui.core.Element",
            cardinality: "0..1",
            visibility: "hidden",
            description: "root attribute managed by this ExactBrowser",
            methods: [
              "getRootAttribute",
              "destroyRootAttribute",
              "setRootAttribute"
            ]
          }
        ],
        defaultAggregation: "attributes",
        associations: [
          {
            name: "followUpControl",
            singularName: "followUpControl",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The successor control of the Exact Browser. The id of this control is used in the ARIA description of the control.",
            methods: ["getFollowUpControl", "setFollowUpControl"]
          }
        ],
        events: [
          {
            name: "attributeSelected",
            visibility: "public",
            description:
              "Event is fired when an attribute is selected or unselected.",
            parameters: {
              attribute: {
                name: "attribute",
                type: "sap.ui.ux3.ExactAttribute",
                description:
                  "The attribute which was selected or unselected recently"
              },
              allAttributes: {
                name: "allAttributes",
                type: "object",
                description: "Array of all selected ExactAttributes"
              }
            },
            methods: [
              "attachAttributeSelected",
              "detachAttributeSelected",
              "fireAttributeSelected"
            ]
          },
          {
            name: "save",
            visibility: "public",
            description:
              "Event is fired when an attribute is selected or unselected.",
            methods: ["attachSave", "detachSave", "fireSave"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ExactBrowser.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "attributeSelected",
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
                    attribute: {
                      name: "attribute",
                      type: "sap.ui.ux3.ExactAttribute",
                      optional: false,
                      description:
                        "The attribute which was selected or unselected recently"
                    },
                    allAttributes: {
                      name: "allAttributes",
                      type: "object",
                      optional: false,
                      description: "Array of all selected ExactAttributes"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when an attribute is selected or unselected."
        },
        {
          name: "save",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "Event is fired when an attribute is selected or unselected."
        }
      ],
      methods: [
        {
          name: "addAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some attribute to the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "attachAttributeSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:attributeSelected attributeSelected} event of this <code>sap.ui.ux3.ExactBrowser</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ExactBrowser</code> itself.\n\nEvent is fired when an attribute is selected or unselected."
        },
        {
          name: "attachSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:save save} event of this <code>sap.ui.ux3.ExactBrowser</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ExactBrowser</code> itself.\n\nEvent is fired when an attribute is selected or unselected."
        },
        {
          name: "destroyAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the attributes in the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "destroyOptionsMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the optionsMenu in the aggregation {@link #getOptionsMenu optionsMenu}."
        },
        {
          name: "detachAttributeSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:attributeSelected attributeSelected} event of this <code>sap.ui.ux3.ExactBrowser</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:save save} event of this <code>sap.ui.ux3.ExactBrowser</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ExactBrowser with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireAttributeSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                attribute: {
                  name: "attribute",
                  type: "sap.ui.ux3.ExactAttribute",
                  optional: true,
                  description:
                    "The attribute which was selected or unselected recently"
                },
                allAttributes: {
                  name: "allAttributes",
                  type: "object",
                  optional: true,
                  description: "Array of all selected ExactAttributes"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:attributeSelected attributeSelected} to attached listeners."
        },
        {
          name: "fireSave",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:save save} to attached listeners."
        },
        {
          name: "getAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute[]"
          },
          description:
            "Gets content of aggregation {@link #getAttributes attributes}.\n\nThe attributes which shall be available."
        },
        {
          name: "getEnableListClose",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableListClose</code>"
          },
          description:
            "Gets current value of property {@link #getEnableListClose enableListClose}.\n\nEnables the close icons of the displayed lists.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getEnableReset",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableReset</code>"
          },
          description:
            "Gets current value of property {@link #getEnableReset enableReset}.\n\nWhether the reset functionality should be available in the header area.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableSave",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableSave</code>"
          },
          description:
            "Gets current value of property {@link #getEnableSave enableSave}.\n\nWhether the save button should be available in the header area.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFollowUpControl",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getFollowUpControl followUpControl}, or <code>null</code>."
        },
        {
          name: "getHeaderTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>headerTitle</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderTitle headerTitle}.\n\nTitle text in the header of the Exact Browser."
        },
        {
          name: "getListHeight",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>listHeight</code>"
          },
          description:
            "Gets current value of property {@link #getListHeight listHeight}.\n\nThe height of the list area in px.\n\nDefault value is <code>290</code>."
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
            "Returns a metadata object for class sap.ui.ux3.ExactBrowser."
        },
        {
          name: "getOptionsMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.Menu"
          },
          description:
            "Gets content of aggregation {@link #getOptionsMenu optionsMenu}.\n\nMenu with options. The menu can not used when the property showTopList is set to false."
        },
        {
          name: "getShowHeader",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showHeader</code>"
          },
          description:
            "Gets current value of property {@link #getShowHeader showHeader}.\n\nWhether the header area of the ExactBrowser should be shown.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowTopList",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showTopList</code>"
          },
          description:
            "Gets current value of property {@link #getShowTopList showTopList}.\n\nWhether the top list of the ExactBrowser should be shown. When the property is set to false the application must ensure to select top level attributes appropriately.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nTitle text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false."
        },
        {
          name: "getTopListOrder",
          visibility: "public",
          since: "1.7.1",
          returnValue: {
            type: "sap.ui.ux3.ExactOrder",
            description: "Value of property <code>topListOrder</code>"
          },
          description:
            "Gets current value of property {@link #getTopListOrder topListOrder}.\n\nThe order how the sublists of the top level list should be displayed.\n\nDefault value is <code>Select</code>."
        },
        {
          name: "getTopListWidth",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>topListWidth</code>"
          },
          description:
            "Gets current value of property {@link #getTopListWidth topListWidth}.\n\nSpecifies the width of the top list in pixels. The value must be between 70 and 500.\n\nDefault value is <code>168</code>."
        },
        {
          name: "indexOfAttribute",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAttribute",
              type: "sap.ui.ux3.ExactAttribute",
              optional: false,
              description:
                "The attribute to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the attribute should be inserted at; for a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value greater than the current size of the aggregation, the attribute is inserted at the last position"
            }
          ],
          description:
            "Inserts a attribute into the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "removeAllAttributes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getAttributes attributes}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAttribute",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactAttribute",
            description: "The removed attribute or <code>null</code>"
          },
          parameters: [
            {
              name: "vAttribute",
              type: "int|string|sap.ui.ux3.ExactAttribute",
              optional: false,
              description: "The attribute to remove or its index or id"
            }
          ],
          description:
            "Removes a attribute from the aggregation {@link #getAttributes attributes}."
        },
        {
          name: "reset",
          visibility: "public",
          "ui5-metamodel": true,
          description:
            "Deselects all currently selected attributes and closes all attribute lists."
        },
        {
          name: "setEnableListClose",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableListClose",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableListClose</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableListClose enableListClose}.\n\nEnables the close icons of the displayed lists.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEnableReset",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableReset",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableReset</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableReset enableReset}.\n\nWhether the reset functionality should be available in the header area.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableSave",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableSave",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableSave</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableSave enableSave}.\n\nWhether the save button should be available in the header area.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFollowUpControl",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFollowUpControl",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this followUpControl association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getFollowUpControl followUpControl}."
        },
        {
          name: "setHeaderTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>headerTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderTitle headerTitle}.\n\nTitle text in the header of the Exact Browser.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setListHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iListHeight",
              type: "int",
              optional: false,
              description: "New value for property <code>listHeight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getListHeight listHeight}.\n\nThe height of the list area in px.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>290</code>."
        },
        {
          name: "setOptionsMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oOptionsMenu",
              type: "sap.ui.commons.Menu",
              optional: false,
              description: "The optionsMenu to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getOptionsMenu optionsMenu}."
        },
        {
          name: "setShowHeader",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowHeader",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showHeader</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowHeader showHeader}.\n\nWhether the header area of the ExactBrowser should be shown.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowTopList",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowTopList",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showTopList</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowTopList showTopList}.\n\nWhether the top list of the ExactBrowser should be shown. When the property is set to false the application must ensure to select top level attributes appropriately.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nTitle text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTopListOrder",
          visibility: "public",
          since: "1.7.1",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTopListOrder",
              type: "sap.ui.ux3.ExactOrder",
              optional: false,
              description: "New value for property <code>topListOrder</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTopListOrder topListOrder}.\n\nThe order how the sublists of the top level list should be displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Select</code>."
        },
        {
          name: "setTopListWidth",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "sap.ui.ux3.ExactBrowser",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iTopListWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>topListWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTopListWidth topListWidth}.\n\nSpecifies the width of the top list in pixels. The value must be between 70 and 500.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>168</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.ExactOrder",
      basename: "ExactOrder",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "ExactOrder",
      static: true,
      visibility: "public",
      since: "1.7.1",
      description:
        "Defines the order of the sub lists of a list in the ExactBrowser.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Fixed",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The order of the sub lists is defined by order of the defined sub attributes."
        },
        {
          name: "Select",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The order of the sub lists is defined by the selection order of the user."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.FacetFilter",
      basename: "FacetFilter",
      resource: "sap/ui/ux3/FacetFilter.js",
      module: "sap/ui/ux3/FacetFilter",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description: "FacetFilter Control.",
      deprecated: {
        since: "1.38",
        text: "replaced by {@link sap.m.FacetFilter}"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "visibleItemCountMode",
            type: "sap.ui.ux3.VisibleItemCountMode",
            defaultValue: "Fixed",
            group: "Appearance",
            visibility: "public",
            description:
              'If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.',
            methods: ["getVisibleItemCountMode", "setVisibleItemCountMode"]
          }
        ],
        aggregations: [
          {
            name: "lists",
            singularName: "list",
            type: "sap.ui.ux3.FacetFilterList",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Facet Filter list represents the list of the filter values and the title of this list.",
            methods: [
              "getLists",
              "destroyLists",
              "insertList",
              "addList",
              "removeList",
              "indexOfList",
              "removeAllLists"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new FacetFilter.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addList",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oList",
              type: "sap.ui.ux3.FacetFilterList",
              optional: false,
              description: "The list to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some list to the aggregation {@link #getLists lists}."
        },
        {
          name: "destroyLists",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the lists in the aggregation {@link #getLists lists}."
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
            "Creates a new subclass of class sap.ui.ux3.FacetFilter with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getLists",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList[]"
          },
          description:
            "Gets content of aggregation {@link #getLists lists}.\n\nFacet Filter list represents the list of the filter values and the title of this list."
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
            "Returns a metadata object for class sap.ui.ux3.FacetFilter."
        },
        {
          name: "getVisibleItemCountMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.VisibleItemCountMode",
            description: "Value of property <code>visibleItemCountMode</code>"
          },
          description:
            'Gets current value of property {@link #getVisibleItemCountMode visibleItemCountMode}.\n\nIf the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.\n\nDefault value is <code>Fixed</code>.'
        },
        {
          name: "indexOfList",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oList",
              type: "sap.ui.ux3.FacetFilterList",
              optional: false,
              description: "The list whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.FacetFilterList</code> in the aggregation {@link #getLists lists}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertList",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oList",
              type: "sap.ui.ux3.FacetFilterList",
              optional: false,
              description: "The list to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the list should be inserted at; for a negative value of <code>iIndex</code>, the list is inserted at position 0; for a value greater than the current size of the aggregation, the list is inserted at the last position"
            }
          ],
          description:
            "Inserts a list into the aggregation {@link #getLists lists}."
        },
        {
          name: "removeAllLists",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getLists lists}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeList",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description: "The removed list or <code>null</code>"
          },
          parameters: [
            {
              name: "vList",
              type: "int|string|sap.ui.ux3.FacetFilterList",
              optional: false,
              description: "The list to remove or its index or id"
            }
          ],
          description:
            "Removes a list from the aggregation {@link #getLists lists}."
        },
        {
          name: "setVisibleItemCountMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sVisibleItemCountMode",
              type: "sap.ui.ux3.VisibleItemCountMode",
              optional: false,
              description:
                "New value for property <code>visibleItemCountMode</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getVisibleItemCountMode visibleItemCountMode}.\n\nIf the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Fixed</code>.'
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.FacetFilterList",
      basename: "FacetFilterList",
      resource: "sap/ui/ux3/FacetFilterList.js",
      module: "sap/ui/ux3/FacetFilterList",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "List to be used with the FacetFilter control. The control is not intended to be used stand alone.",
      deprecated: {
        since: "1.38",
        text: "replaced by {@link sap.m.FacetFilter}"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The title of this list.",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "multiSelect",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Specifies whether multiple or single selection is used.",
            methods: ["getMultiSelect", "setMultiSelect"]
          },
          {
            name: "displaySecondaryValues",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.9.0",
            description:
              "Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.",
            methods: ["getDisplaySecondaryValues", "setDisplaySecondaryValues"]
          },
          {
            name: "selectedKeys",
            type: "string[]",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Array of type string containing the selected keys.",
            methods: ["getSelectedKeys", "setSelectedKeys"]
          },
          {
            name: "showCounter",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Specifies whether the counter for all entries is shown.",
            methods: ["getShowCounter", "setShowCounter"]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.ui.core.ListItem",
            cardinality: "0..n",
            visibility: "public",
            description: "The filter values that are presented as a list.",
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
            name: "controls",
            singularName: "control",
            type: "sap.ui.commons.ListBox",
            cardinality: "0..n",
            visibility: "hidden",
            description: "ListBoxes that are managed by this FacetFilterList",
            methods: [
              "getControls",
              "destroyControls",
              "insertControl",
              "addControl",
              "removeControl",
              "indexOfControl",
              "removeAllControls"
            ]
          }
        ],
        events: [
          {
            name: "select",
            visibility: "public",
            description: "On Select event.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of the FacetFilterList taht fires the event."
              },
              selectedIndices: {
                name: "selectedIndices",
                type: "int[]",
                description: "Array of selected Indices."
              },
              selectedItems: {
                name: "selectedItems",
                type: "sap.ui.core.ListItem[]",
                description: "Array of selected Items."
              },
              all: {
                name: "all",
                type: "boolean",
                description:
                  "If it is true, then Item All is selected. That means all items in the list are selected - no filter is set."
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new FacetFilterList.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description:
                        "Id of the FacetFilterList taht fires the event."
                    },
                    selectedIndices: {
                      name: "selectedIndices",
                      type: "int[]",
                      optional: false,
                      description: "Array of selected Indices."
                    },
                    selectedItems: {
                      name: "selectedItems",
                      type: "sap.ui.core.ListItem[]",
                      optional: false,
                      description: "Array of selected Items."
                    },
                    all: {
                      name: "all",
                      type: "boolean",
                      optional: false,
                      description:
                        "If it is true, then Item All is selected. That means all items in the list are selected - no filter is set."
                    }
                  }
                }
              }
            }
          ],
          description: "On Select event."
        }
      ],
      methods: [
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.ListItem",
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
            type: "sap.ui.ux3.FacetFilterList",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FacetFilterList</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.ux3.FacetFilterList</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FacetFilterList</code> itself.\n\nOn Select event."
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
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
            type: "sap.ui.ux3.FacetFilterList",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.ux3.FacetFilterList</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.FacetFilterList with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireSelect",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of the FacetFilterList taht fires the event."
                },
                selectedIndices: {
                  name: "selectedIndices",
                  type: "int[]",
                  optional: true,
                  description: "Array of selected Indices."
                },
                selectedItems: {
                  name: "selectedItems",
                  type: "sap.ui.core.ListItem[]",
                  optional: true,
                  description: "Array of selected Items."
                },
                all: {
                  name: "all",
                  type: "boolean",
                  optional: true,
                  description:
                    "If it is true, then Item All is selected. That means all items in the list are selected - no filter is set."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:select select} to attached listeners."
        },
        {
          name: "getDisplaySecondaryValues",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>displaySecondaryValues</code>"
          },
          description:
            "Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.\n\nSpecifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ListItem[]"
          },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nThe filter values that are presented as a list."
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
            "Returns a metadata object for class sap.ui.ux3.FacetFilterList."
        },
        {
          name: "getMultiSelect",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>multiSelect</code>"
          },
          description:
            "Gets current value of property {@link #getMultiSelect multiSelect}.\n\nSpecifies whether multiple or single selection is used.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getSelectedKeys",
          visibility: "public",
          returnValue: {
            type: "string[]",
            description: "Value of property <code>selectedKeys</code>"
          },
          description:
            "Gets current value of property {@link #getSelectedKeys selectedKeys}.\n\nArray of type string containing the selected keys."
        },
        {
          name: "getShowCounter",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showCounter</code>"
          },
          description:
            "Gets current value of property {@link #getShowCounter showCounter}.\n\nSpecifies whether the counter for all entries is shown.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nThe title of this list."
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
              type: "sap.ui.core.ListItem",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.ListItem",
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
            type: "sap.ui.core.ListItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ListItem",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.ui.core.ListItem",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "setDisplaySecondaryValues",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bDisplaySecondaryValues",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>displaySecondaryValues</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.\n\nSpecifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setMultiSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMultiSelect",
              type: "boolean",
              optional: false,
              description: "New value for property <code>multiSelect</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMultiSelect multiSelect}.\n\nSpecifies whether multiple or single selection is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSelectedKeys",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSelectedKeys",
              type: "string[]",
              optional: false,
              description: "New value for property <code>selectedKeys</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSelectedKeys selectedKeys}.\n\nArray of type string containing the selected keys.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setShowCounter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowCounter",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showCounter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowCounter showCounter}.\n\nSpecifies whether the counter for all entries is shown.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FacetFilterList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nThe title of this list.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Feed",
      basename: "Feed",
      resource: "sap/ui/ux3/Feed.js",
      module: "sap/ui/ux3/Feed",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "A container control representing a full feed page, including feeder and updates.",
      experimental: {
        since: "1.2",
        text:
          "The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open."
      },
      deprecated: {
        since: "1.38",
        text:
          "Instead, use <b>any</b> <code>sap.ui.layout</code> container control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "feederThumbnailSrc",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "The path to the thumbnail image used for the feeder",
            methods: ["getFeederThumbnailSrc", "setFeederThumbnailSrc"]
          },
          {
            name: "feederSender",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "The sender of the feeder",
            methods: ["getFeederSender", "setFeederSender"]
          },
          {
            name: "live",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description: "Specifies whether the feed shall be in live mode",
            methods: ["getLive", "setLive"]
          },
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              'Title text of the Feed. If no text is entered "FEED" is displayed.',
            methods: ["getTitle", "setTitle"]
          }
        ],
        aggregations: [
          {
            name: "filterItems",
            singularName: "filterItem",
            type: "sap.ui.core.ListItem",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description: "Items of the filter",
            methods: [
              "getFilterItems",
              "destroyFilterItems",
              "insertFilterItem",
              "addFilterItem",
              "removeFilterItem",
              "indexOfFilterItem",
              "removeAllFilterItems",
              "bindFilterItems",
              "unbindFilterItems"
            ]
          },
          {
            name: "chunks",
            singularName: "chunk",
            type: "sap.ui.ux3.FeedChunk",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description: "The chunks",
            methods: [
              "getChunks",
              "destroyChunks",
              "insertChunk",
              "addChunk",
              "removeChunk",
              "indexOfChunk",
              "removeAllChunks",
              "bindChunks",
              "unbindChunks"
            ]
          },
          {
            name: "toolsMenuItems",
            singularName: "toolsMenuItem",
            type: "sap.ui.commons.MenuItem",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description:
              "MenuItems to open when the tool button is clicked by the user",
            methods: [
              "getToolsMenuItems",
              "destroyToolsMenuItems",
              "insertToolsMenuItem",
              "addToolsMenuItem",
              "removeToolsMenuItem",
              "indexOfToolsMenuItem",
              "removeAllToolsMenuItems",
              "bindToolsMenuItems",
              "unbindToolsMenuItems"
            ]
          }
        ],
        events: [
          {
            name: "filterChange",
            visibility: "public",
            description: "Event is fired when the filter is changed",
            parameters: {
              newValue: {
                name: "newValue",
                type: "string",
                description: "The new/changed value of the filter"
              }
            },
            methods: [
              "attachFilterChange",
              "detachFilterChange",
              "fireFilterChange"
            ]
          },
          {
            name: "search",
            visibility: "public",
            description:
              "Event is fired when the search function on SearchField is triggered",
            parameters: {
              query: {
                name: "query",
                type: "string",
                description: "The search query"
              }
            },
            methods: ["attachSearch", "detachSearch", "fireSearch"]
          },
          {
            name: "chunkAdded",
            visibility: "public",
            description: "Event is fired when a new chunk is added",
            parameters: {
              chunk: {
                name: "chunk",
                type: "sap.ui.ux3.FeedChunk",
                description: "New chunk"
              }
            },
            methods: ["attachChunkAdded", "detachChunkAdded", "fireChunkAdded"]
          },
          {
            name: "toolsItemSelected",
            visibility: "public",
            description:
              "Event is fired when an item from the tools MenuButton was selected",
            parameters: {
              itemId: {
                name: "itemId",
                type: "string",
                description: "The Id of the selected item"
              },
              item: {
                name: "item",
                type: "sap.ui.unified.MenuItemBase",
                description: "The selected item"
              }
            },
            methods: [
              "attachToolsItemSelected",
              "detachToolsItemSelected",
              "fireToolsItemSelected"
            ]
          },
          {
            name: "toggleLive",
            visibility: "public",
            description: "Event is fired when the live mode has changed",
            parameters: {
              live: {
                name: "live",
                type: "boolean",
                description: "Current live indicator"
              }
            },
            methods: ["attachToggleLive", "detachToggleLive", "fireToggleLive"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Feed.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "chunkAdded",
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
                    chunk: {
                      name: "chunk",
                      type: "sap.ui.ux3.FeedChunk",
                      optional: false,
                      description: "New chunk"
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when a new chunk is added"
        },
        {
          name: "filterChange",
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
                    newValue: {
                      name: "newValue",
                      type: "string",
                      optional: false,
                      description: "The new/changed value of the filter"
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the filter is changed"
        },
        {
          name: "search",
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
                    query: {
                      name: "query",
                      type: "string",
                      optional: false,
                      description: "The search query"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when the search function on SearchField is triggered"
        },
        {
          name: "toggleLive",
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
                    live: {
                      name: "live",
                      type: "boolean",
                      optional: false,
                      description: "Current live indicator"
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the live mode has changed"
        },
        {
          name: "toolsItemSelected",
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
                    itemId: {
                      name: "itemId",
                      type: "string",
                      optional: false,
                      description: "The Id of the selected item"
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.unified.MenuItemBase",
                      optional: false,
                      description: "The selected item"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when an item from the tools MenuButton was selected"
        }
      ],
      methods: [
        {
          name: "addChunk",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oChunk",
              type: "sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The chunk to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some chunk to the aggregation {@link #getChunks chunks}."
        },
        {
          name: "addFilterItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFilterItem",
              type: "sap.ui.core.ListItem",
              optional: false,
              description:
                "The filterItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some filterItem to the aggregation {@link #getFilterItems filterItems}."
        },
        {
          name: "addToolsMenuItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolsMenuItem",
              type: "sap.ui.commons.MenuItem",
              optional: false,
              description:
                "The toolsMenuItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some toolsMenuItem to the aggregation {@link #getToolsMenuItems toolsMenuItems}."
        },
        {
          name: "attachChunkAdded",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:chunkAdded chunkAdded} event of this <code>sap.ui.ux3.Feed</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.\n\nEvent is fired when a new chunk is added"
        },
        {
          name: "attachFilterChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:filterChange filterChange} event of this <code>sap.ui.ux3.Feed</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.\n\nEvent is fired when the filter is changed"
        },
        {
          name: "attachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.Feed</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.\n\nEvent is fired when the search function on SearchField is triggered"
        },
        {
          name: "attachToggleLive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toggleLive toggleLive} event of this <code>sap.ui.ux3.Feed</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.\n\nEvent is fired when the live mode has changed"
        },
        {
          name: "attachToolsItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toolsItemSelected toolsItemSelected} event of this <code>sap.ui.ux3.Feed</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.\n\nEvent is fired when an item from the tools MenuButton was selected"
        },
        {
          name: "bindChunks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Binds aggregation {@link #getChunks chunks} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "bindFilterItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Binds aggregation {@link #getFilterItems filterItems} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "bindToolsMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Binds aggregation {@link #getToolsMenuItems toolsMenuItems} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "destroyChunks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the chunks in the aggregation {@link #getChunks chunks}."
        },
        {
          name: "destroyFilterItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}."
        },
        {
          name: "destroyToolsMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the toolsMenuItems in the aggregation {@link #getToolsMenuItems toolsMenuItems}."
        },
        {
          name: "detachChunkAdded",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:chunkAdded chunkAdded} event of this <code>sap.ui.ux3.Feed</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFilterChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:filterChange filterChange} event of this <code>sap.ui.ux3.Feed</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.Feed</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachToggleLive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toggleLive toggleLive} event of this <code>sap.ui.ux3.Feed</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachToolsItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toolsItemSelected toolsItemSelected} event of this <code>sap.ui.ux3.Feed</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Feed with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireChunkAdded",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                chunk: {
                  name: "chunk",
                  type: "sap.ui.ux3.FeedChunk",
                  optional: true,
                  description: "New chunk"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:chunkAdded chunkAdded} to attached listeners."
        },
        {
          name: "fireFilterChange",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                newValue: {
                  name: "newValue",
                  type: "string",
                  optional: true,
                  description: "The new/changed value of the filter"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:filterChange filterChange} to attached listeners."
        },
        {
          name: "fireSearch",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                query: {
                  name: "query",
                  type: "string",
                  optional: true,
                  description: "The search query"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:search search} to attached listeners."
        },
        {
          name: "fireToggleLive",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                live: {
                  name: "live",
                  type: "boolean",
                  optional: true,
                  description: "Current live indicator"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toggleLive toggleLive} to attached listeners."
        },
        {
          name: "fireToolsItemSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                itemId: {
                  name: "itemId",
                  type: "string",
                  optional: true,
                  description: "The Id of the selected item"
                },
                item: {
                  name: "item",
                  type: "sap.ui.unified.MenuItemBase",
                  optional: true,
                  description: "The selected item"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toolsItemSelected toolsItemSelected} to attached listeners."
        },
        {
          name: "getChunks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk[]"
          },
          description:
            "Gets content of aggregation {@link #getChunks chunks}.\n\nThe chunks"
        },
        {
          name: "getFeederSender",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>feederSender</code>"
          },
          description:
            "Gets current value of property {@link #getFeederSender feederSender}.\n\nThe sender of the feeder"
        },
        {
          name: "getFeederThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>feederThumbnailSrc</code>"
          },
          description:
            "Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.\n\nThe path to the thumbnail image used for the feeder"
        },
        {
          name: "getFilterItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ListItem[]"
          },
          description:
            "Gets content of aggregation {@link #getFilterItems filterItems}.\n\nItems of the filter"
        },
        {
          name: "getLive",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>live</code>"
          },
          description:
            "Gets current value of property {@link #getLive live}.\n\nSpecifies whether the feed shall be in live mode\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.ux3.Feed."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            'Gets current value of property {@link #getTitle title}.\n\nTitle text of the Feed. If no text is entered "FEED" is displayed.'
        },
        {
          name: "getToolsMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.MenuItem[]"
          },
          description:
            "Gets content of aggregation {@link #getToolsMenuItems toolsMenuItems}.\n\nMenuItems to open when the tool button is clicked by the user"
        },
        {
          name: "indexOfChunk",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oChunk",
              type: "sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The chunk whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation {@link #getChunks chunks}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfFilterItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFilterItem",
              type: "sap.ui.core.ListItem",
              optional: false,
              description: "The filterItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation {@link #getFilterItems filterItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfToolsMenuItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oToolsMenuItem",
              type: "sap.ui.commons.MenuItem",
              optional: false,
              description: "The toolsMenuItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation {@link #getToolsMenuItems toolsMenuItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertChunk",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oChunk",
              type: "sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The chunk to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the chunk should be inserted at; for a negative value of <code>iIndex</code>, the chunk is inserted at position 0; for a value greater than the current size of the aggregation, the chunk is inserted at the last position"
            }
          ],
          description:
            "Inserts a chunk into the aggregation {@link #getChunks chunks}."
        },
        {
          name: "insertFilterItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFilterItem",
              type: "sap.ui.core.ListItem",
              optional: false,
              description:
                "The filterItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the filterItem should be inserted at; for a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value greater than the current size of the aggregation, the filterItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}."
        },
        {
          name: "insertToolsMenuItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolsMenuItem",
              type: "sap.ui.commons.MenuItem",
              optional: false,
              description:
                "The toolsMenuItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the toolsMenuItem should be inserted at; for a negative value of <code>iIndex</code>, the toolsMenuItem is inserted at position 0; for a value greater than the current size of the aggregation, the toolsMenuItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a toolsMenuItem into the aggregation {@link #getToolsMenuItems toolsMenuItems}."
        },
        {
          name: "removeAllChunks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getChunks chunks}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllFilterItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ListItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFilterItems filterItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllToolsMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.MenuItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getToolsMenuItems toolsMenuItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeChunk",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description: "The removed chunk or <code>null</code>"
          },
          parameters: [
            {
              name: "vChunk",
              type: "int|string|sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The chunk to remove or its index or id"
            }
          ],
          description:
            "Removes a chunk from the aggregation {@link #getChunks chunks}."
        },
        {
          name: "removeFilterItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ListItem",
            description: "The removed filterItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vFilterItem",
              type: "int|string|sap.ui.core.ListItem",
              optional: false,
              description: "The filterItem to remove or its index or id"
            }
          ],
          description:
            "Removes a filterItem from the aggregation {@link #getFilterItems filterItems}."
        },
        {
          name: "removeToolsMenuItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.MenuItem",
            description: "The removed toolsMenuItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vToolsMenuItem",
              type: "int|string|sap.ui.commons.MenuItem",
              optional: false,
              description: "The toolsMenuItem to remove or its index or id"
            }
          ],
          description:
            "Removes a toolsMenuItem from the aggregation {@link #getToolsMenuItems toolsMenuItems}."
        },
        {
          name: "setFeederSender",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFeederSender",
              type: "string",
              optional: false,
              description: "New value for property <code>feederSender</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFeederSender feederSender}.\n\nThe sender of the feeder\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFeederThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFeederThumbnailSrc",
              type: "sap.ui.core.URI",
              optional: false,
              description:
                "New value for property <code>feederThumbnailSrc</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.\n\nThe path to the thumbnail image used for the feeder\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setLive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLive",
              type: "boolean",
              optional: false,
              description: "New value for property <code>live</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLive live}.\n\nSpecifies whether the feed shall be in live mode\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getTitle title}.\n\nTitle text of the Feed. If no text is entered "FEED" is displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.'
        },
        {
          name: "unbindChunks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getChunks chunks} from model data."
        },
        {
          name: "unbindFilterItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getFilterItems filterItems} from model data."
        },
        {
          name: "unbindToolsMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feed",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getToolsMenuItems toolsMenuItems} from model data."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.FeedChunk",
      basename: "FeedChunk",
      resource: "sap/ui/ux3/FeedChunk.js",
      module: "sap/ui/ux3/FeedChunk",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "The unit that is embedded - single-wise or in a multiple way - into a Feed control. The control provides a set of properties for text, sender information, time stamp, comments, and functions such as flagging the entry to be favorite, shared, or flagged.",
      experimental: {
        since: "1.2",
        text:
          "The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open."
      },
      deprecated: {
        since: "1.38",
        text: "Instead, use the <code>sap.m.FeedListItem</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "thumbnailSrc",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "URL to the thumbnail image.",
            methods: ["getThumbnailSrc", "setThumbnailSrc"]
          },
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "The FeedChunk text. @References are supported.",
            methods: ["getText", "setText"]
          },
          {
            name: "sender",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "Sender of the chunk",
            methods: ["getSender", "setSender"]
          },
          {
            name: "timestamp",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              "Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone",
            methods: ["getTimestamp", "setTimestamp"]
          },
          {
            name: "deletionAllowed",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description: "Flag if the deletion of the chunk shall be allowed",
            methods: ["getDeletionAllowed", "setDeletionAllowed"]
          },
          {
            name: "commentChunk",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore it must be assigned to a FeedChunk.",
            deprecated: {
              since: "1.4.0",
              text:
                "Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment."
            },
            methods: ["getCommentChunk", "setCommentChunk"]
          },
          {
            name: "feederThumbnailSrc",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              "URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.",
            methods: ["getFeederThumbnailSrc", "setFeederThumbnailSrc"]
          },
          {
            name: "feederSender",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              "Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.",
            methods: ["getFeederSender", "setFeederSender"]
          },
          {
            name: "flagged",
            type: "boolean",
            defaultValue: false,
            group: "Data",
            visibility: "public",
            description:
              "Defines whether the entry is flagged. This property is not supported for comment chunks.",
            methods: ["getFlagged", "setFlagged"]
          },
          {
            name: "favorite",
            type: "boolean",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              "Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.",
            methods: ["getFavorite", "setFavorite"]
          },
          {
            name: "shared",
            type: "boolean",
            defaultValue: false,
            group: "Data",
            visibility: "public",
            description:
              "Defines whether the entry shall be shared. This property is not supported for comment chunks.",
            methods: ["getShared", "setShared"]
          },
          {
            name: "enableFlag",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "If true the flag action is enabled.",
            methods: ["getEnableFlag", "setEnableFlag"]
          },
          {
            name: "enableShare",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "If true the share action is enabled.",
            methods: ["getEnableShare", "setEnableShare"]
          },
          {
            name: "enableComment",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "If true the comment action is enabled.",
            methods: ["getEnableComment", "setEnableComment"]
          },
          {
            name: "enableInspect",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "If true the inspect action is enabled.",
            methods: ["getEnableInspect", "setEnableInspect"]
          },
          {
            name: "enableFavorite",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "If true the favorite action is enabled.",
            methods: ["getEnableFavorite", "setEnableFavorite"]
          }
        ],
        aggregations: [
          {
            name: "comments",
            singularName: "comment",
            type: "sap.ui.ux3.FeedChunk",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description: "Comments on this chunk",
            methods: [
              "getComments",
              "destroyComments",
              "insertComment",
              "addComment",
              "removeComment",
              "indexOfComment",
              "removeAllComments",
              "bindComments",
              "unbindComments"
            ]
          },
          {
            name: "actionMenuItems",
            singularName: "actionMenuItem",
            type: "sap.ui.commons.MenuItem",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description:
              "MenuItems to open when there is a click on the action menu button",
            methods: [
              "getActionMenuItems",
              "destroyActionMenuItems",
              "insertActionMenuItem",
              "addActionMenuItem",
              "removeActionMenuItem",
              "indexOfActionMenuItem",
              "removeAllActionMenuItems",
              "bindActionMenuItems",
              "unbindActionMenuItems"
            ]
          }
        ],
        events: [
          {
            name: "deleted",
            visibility: "public",
            description: "Event is fired when the deletion button is pressed.",
            methods: ["attachDeleted", "detachDeleted", "fireDeleted"]
          },
          {
            name: "commentAdded",
            visibility: "public",
            description:
              "Event is raised when a comment is added to the entry. This event is not supported for comment chunks.",
            parameters: {
              comment: {
                name: "comment",
                type: "sap.ui.ux3.FeedChunk",
                description: "New comment chunk"
              }
            },
            methods: [
              "attachCommentAdded",
              "detachCommentAdded",
              "fireCommentAdded"
            ]
          },
          {
            name: "toggleFlagged",
            visibility: "public",
            description:
              "Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.",
            parameters: {
              flagged: {
                name: "flagged",
                type: "boolean",
                description: "Current flagged state"
              }
            },
            methods: [
              "attachToggleFlagged",
              "detachToggleFlagged",
              "fireToggleFlagged"
            ]
          },
          {
            name: "senderClicked",
            visibility: "public",
            description:
              "Event is fired when the thumbnail or the name of the sender is clicked.",
            methods: [
              "attachSenderClicked",
              "detachSenderClicked",
              "fireSenderClicked"
            ]
          },
          {
            name: "referenceClicked",
            visibility: "public",
            description: "Click on a @-reference",
            parameters: {
              text: {
                name: "text",
                type: "string",
                description: "Text of the @-reference"
              }
            },
            methods: [
              "attachReferenceClicked",
              "detachReferenceClicked",
              "fireReferenceClicked"
            ]
          },
          {
            name: "toggleFavorite",
            visibility: "public",
            description:
              "Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks.",
            parameters: {
              favorite: {
                name: "favorite",
                type: "boolean",
                description: "Current favorite state"
              }
            },
            methods: [
              "attachToggleFavorite",
              "detachToggleFavorite",
              "fireToggleFavorite"
            ]
          },
          {
            name: "inspect",
            visibility: "public",
            description: "Event is fired when the inspect button was pressed",
            methods: ["attachInspect", "detachInspect", "fireInspect"]
          },
          {
            name: "toggleShared",
            visibility: "public",
            description:
              "Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.",
            parameters: {
              shareed: {
                name: "shareed",
                type: "boolean",
                description: "Current shared state"
              }
            },
            methods: [
              "attachToggleShared",
              "detachToggleShared",
              "fireToggleShared"
            ]
          },
          {
            name: "actionItemSelected",
            visibility: "public",
            description:
              "Event is fired when an item from the action menu button was selected.",
            parameters: {
              itemId: {
                name: "itemId",
                type: "string",
                description: "The Id of the selected item"
              },
              item: {
                name: "item",
                type: "sap.ui.unified.MenuItemBase",
                description: "The selected item"
              }
            },
            methods: [
              "attachActionItemSelected",
              "detachActionItemSelected",
              "fireActionItemSelected"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new FeedChunk.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "actionItemSelected",
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
                    itemId: {
                      name: "itemId",
                      type: "string",
                      optional: false,
                      description: "The Id of the selected item"
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.unified.MenuItemBase",
                      optional: false,
                      description: "The selected item"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when an item from the action menu button was selected."
        },
        {
          name: "commentAdded",
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
                    comment: {
                      name: "comment",
                      type: "sap.ui.ux3.FeedChunk",
                      optional: false,
                      description: "New comment chunk"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is raised when a comment is added to the entry. This event is not supported for comment chunks."
        },
        {
          name: "deleted",
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
                  optional: false
                }
              }
            }
          ],
          description: "Event is fired when the deletion button is pressed."
        },
        {
          name: "inspect",
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
                  optional: false
                }
              }
            }
          ],
          description: "Event is fired when the inspect button was pressed"
        },
        {
          name: "referenceClicked",
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
                    text: {
                      name: "text",
                      type: "string",
                      optional: false,
                      description: "Text of the @-reference"
                    }
                  }
                }
              }
            }
          ],
          description: "Click on a @-reference"
        },
        {
          name: "senderClicked",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "Event is fired when the thumbnail or the name of the sender is clicked."
        },
        {
          name: "toggleFavorite",
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
                    favorite: {
                      name: "favorite",
                      type: "boolean",
                      optional: false,
                      description: "Current favorite state"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks."
        },
        {
          name: "toggleFlagged",
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
                    flagged: {
                      name: "flagged",
                      type: "boolean",
                      optional: false,
                      description: "Current flagged state"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks."
        },
        {
          name: "toggleShared",
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
                    shareed: {
                      name: "shareed",
                      type: "boolean",
                      optional: false,
                      description: "Current shared state"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is raised when the user clicks to share the entry. This event is not supported for comment chunks."
        }
      ],
      methods: [
        {
          name: "addActionMenuItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oActionMenuItem",
              type: "sap.ui.commons.MenuItem",
              optional: false,
              description:
                "The actionMenuItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some actionMenuItem to the aggregation {@link #getActionMenuItems actionMenuItems}."
        },
        {
          name: "addComment",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oComment",
              type: "sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The comment to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some comment to the aggregation {@link #getComments comments}."
        },
        {
          name: "attachActionItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:actionItemSelected actionItemSelected} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is fired when an item from the action menu button was selected."
        },
        {
          name: "attachCommentAdded",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:commentAdded commentAdded} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is raised when a comment is added to the entry. This event is not supported for comment chunks."
        },
        {
          name: "attachDeleted",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:deleted deleted} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is fired when the deletion button is pressed."
        },
        {
          name: "attachInspect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:inspect inspect} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is fired when the inspect button was pressed"
        },
        {
          name: "attachReferenceClicked",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:referenceClicked referenceClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nClick on a @-reference"
        },
        {
          name: "attachSenderClicked",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:senderClicked senderClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is fired when the thumbnail or the name of the sender is clicked."
        },
        {
          name: "attachToggleFavorite",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toggleFavorite toggleFavorite} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks."
        },
        {
          name: "attachToggleFlagged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toggleFlagged toggleFlagged} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is raised when the user clicks to flag the entry. This event is not supported for comment chunks."
        },
        {
          name: "attachToggleShared",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toggleShared toggleShared} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.\n\nEvent is raised when the user clicks to share the entry. This event is not supported for comment chunks."
        },
        {
          name: "bindActionMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Binds aggregation {@link #getActionMenuItems actionMenuItems} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "bindComments",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Binds aggregation {@link #getComments comments} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "destroyActionMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actionMenuItems in the aggregation {@link #getActionMenuItems actionMenuItems}."
        },
        {
          name: "destroyComments",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the comments in the aggregation {@link #getComments comments}."
        },
        {
          name: "detachActionItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:actionItemSelected actionItemSelected} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachCommentAdded",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:commentAdded commentAdded} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachDeleted",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:deleted deleted} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachInspect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:inspect inspect} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachReferenceClicked",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:referenceClicked referenceClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSenderClicked",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:senderClicked senderClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachToggleFavorite",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toggleFavorite toggleFavorite} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachToggleFlagged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toggleFlagged toggleFlagged} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachToggleShared",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toggleShared toggleShared} event of this <code>sap.ui.ux3.FeedChunk</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.FeedChunk with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireActionItemSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                itemId: {
                  name: "itemId",
                  type: "string",
                  optional: true,
                  description: "The Id of the selected item"
                },
                item: {
                  name: "item",
                  type: "sap.ui.unified.MenuItemBase",
                  optional: true,
                  description: "The selected item"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:actionItemSelected actionItemSelected} to attached listeners."
        },
        {
          name: "fireCommentAdded",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                comment: {
                  name: "comment",
                  type: "sap.ui.ux3.FeedChunk",
                  optional: true,
                  description: "New comment chunk"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:commentAdded commentAdded} to attached listeners."
        },
        {
          name: "fireDeleted",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:deleted deleted} to attached listeners."
        },
        {
          name: "fireInspect",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:inspect inspect} to attached listeners."
        },
        {
          name: "fireReferenceClicked",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                text: {
                  name: "text",
                  type: "string",
                  optional: true,
                  description: "Text of the @-reference"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:referenceClicked referenceClicked} to attached listeners."
        },
        {
          name: "fireSenderClicked",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:senderClicked senderClicked} to attached listeners."
        },
        {
          name: "fireToggleFavorite",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                favorite: {
                  name: "favorite",
                  type: "boolean",
                  optional: true,
                  description: "Current favorite state"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toggleFavorite toggleFavorite} to attached listeners."
        },
        {
          name: "fireToggleFlagged",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                flagged: {
                  name: "flagged",
                  type: "boolean",
                  optional: true,
                  description: "Current flagged state"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toggleFlagged toggleFlagged} to attached listeners."
        },
        {
          name: "fireToggleShared",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                shareed: {
                  name: "shareed",
                  type: "boolean",
                  optional: true,
                  description: "Current shared state"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toggleShared toggleShared} to attached listeners."
        },
        {
          name: "getActionMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.MenuItem[]"
          },
          description:
            "Gets content of aggregation {@link #getActionMenuItems actionMenuItems}.\n\nMenuItems to open when there is a click on the action menu button"
        },
        {
          name: "getCommentChunk",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>commentChunk</code>"
          },
          description:
            "Gets current value of property {@link #getCommentChunk commentChunk}.\n\nThis flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore it must be assigned to a FeedChunk.\n\nDefault value is <code>false</code>.",
          deprecated: {
            since: "1.4.0",
            text:
              "Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment."
          }
        },
        {
          name: "getComments",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk[]"
          },
          description:
            "Gets content of aggregation {@link #getComments comments}.\n\nComments on this chunk"
        },
        {
          name: "getDeletionAllowed",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>deletionAllowed</code>"
          },
          description:
            "Gets current value of property {@link #getDeletionAllowed deletionAllowed}.\n\nFlag if the deletion of the chunk shall be allowed\n\nDefault value is <code>false</code>."
        },
        {
          name: "getEnableComment",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableComment</code>"
          },
          description:
            "Gets current value of property {@link #getEnableComment enableComment}.\n\nIf true the comment action is enabled.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableFavorite",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableFavorite</code>"
          },
          description:
            "Gets current value of property {@link #getEnableFavorite enableFavorite}.\n\nIf true the favorite action is enabled.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableFlag",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableFlag</code>"
          },
          description:
            "Gets current value of property {@link #getEnableFlag enableFlag}.\n\nIf true the flag action is enabled.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableInspect",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableInspect</code>"
          },
          description:
            "Gets current value of property {@link #getEnableInspect enableInspect}.\n\nIf true the inspect action is enabled.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableShare",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableShare</code>"
          },
          description:
            "Gets current value of property {@link #getEnableShare enableShare}.\n\nIf true the share action is enabled.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFavorite",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>favorite</code>"
          },
          description:
            "Gets current value of property {@link #getFavorite favorite}.\n\nDefines whether the entry shall be displayed as favorite. This property is not supported for comment chunks."
        },
        {
          name: "getFeederSender",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>feederSender</code>"
          },
          description:
            "Gets current value of property {@link #getFeederSender feederSender}.\n\nSender for the comment feeder This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control."
        },
        {
          name: "getFeederThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>feederThumbnailSrc</code>"
          },
          description:
            "Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.\n\nURL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control."
        },
        {
          name: "getFlagged",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flagged</code>"
          },
          description:
            "Gets current value of property {@link #getFlagged flagged}.\n\nDefines whether the entry is flagged. This property is not supported for comment chunks.\n\nDefault value is <code>false</code>."
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
            "Returns a metadata object for class sap.ui.ux3.FeedChunk."
        },
        {
          name: "getSender",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>sender</code>"
          },
          description:
            "Gets current value of property {@link #getSender sender}.\n\nSender of the chunk"
        },
        {
          name: "getShared",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>shared</code>"
          },
          description:
            "Gets current value of property {@link #getShared shared}.\n\nDefines whether the entry shall be shared. This property is not supported for comment chunks.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nThe FeedChunk text. @References are supported."
        },
        {
          name: "getThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>thumbnailSrc</code>"
          },
          description:
            "Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.\n\nURL to the thumbnail image."
        },
        {
          name: "getTimestamp",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>timestamp</code>"
          },
          description:
            "Gets current value of property {@link #getTimestamp timestamp}.\n\nFormat is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone"
        },
        {
          name: "indexOfActionMenuItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oActionMenuItem",
              type: "sap.ui.commons.MenuItem",
              optional: false,
              description: "The actionMenuItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation {@link #getActionMenuItems actionMenuItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfComment",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oComment",
              type: "sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The comment whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation {@link #getComments comments}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertActionMenuItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oActionMenuItem",
              type: "sap.ui.commons.MenuItem",
              optional: false,
              description:
                "The actionMenuItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the actionMenuItem should be inserted at; for a negative value of <code>iIndex</code>, the actionMenuItem is inserted at position 0; for a value greater than the current size of the aggregation, the actionMenuItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a actionMenuItem into the aggregation {@link #getActionMenuItems actionMenuItems}."
        },
        {
          name: "insertComment",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oComment",
              type: "sap.ui.ux3.FeedChunk",
              optional: false,
              description:
                "The comment to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the comment should be inserted at; for a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value greater than the current size of the aggregation, the comment is inserted at the last position"
            }
          ],
          description:
            "Inserts a comment into the aggregation {@link #getComments comments}."
        },
        {
          name: "removeActionMenuItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.MenuItem",
            description: "The removed actionMenuItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vActionMenuItem",
              type: "int|string|sap.ui.commons.MenuItem",
              optional: false,
              description: "The actionMenuItem to remove or its index or id"
            }
          ],
          description:
            "Removes a actionMenuItem from the aggregation {@link #getActionMenuItems actionMenuItems}."
        },
        {
          name: "removeAllActionMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.commons.MenuItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getActionMenuItems actionMenuItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllComments",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getComments comments}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeComment",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description: "The removed comment or <code>null</code>"
          },
          parameters: [
            {
              name: "vComment",
              type: "int|string|sap.ui.ux3.FeedChunk",
              optional: false,
              description: "The comment to remove or its index or id"
            }
          ],
          description:
            "Removes a comment from the aggregation {@link #getComments comments}."
        },
        {
          name: "setCommentChunk",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bCommentChunk",
              type: "boolean",
              optional: false,
              description: "New value for property <code>commentChunk</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCommentChunk commentChunk}.\n\nThis flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore it must be assigned to a FeedChunk.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.",
          deprecated: {
            since: "1.4.0",
            text:
              "Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment."
          }
        },
        {
          name: "setDeletionAllowed",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bDeletionAllowed",
              type: "boolean",
              optional: false,
              description: "New value for property <code>deletionAllowed</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDeletionAllowed deletionAllowed}.\n\nFlag if the deletion of the chunk shall be allowed\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEnableComment",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableComment",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableComment</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableComment enableComment}.\n\nIf true the comment action is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableFavorite",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableFavorite",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableFavorite</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableFavorite enableFavorite}.\n\nIf true the favorite action is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableFlag",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableFlag",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableFlag</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableFlag enableFlag}.\n\nIf true the flag action is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableInspect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableInspect",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableInspect</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableInspect enableInspect}.\n\nIf true the inspect action is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableShare",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableShare",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableShare</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableShare enableShare}.\n\nIf true the share action is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFavorite",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFavorite",
              type: "boolean",
              optional: false,
              description: "New value for property <code>favorite</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFavorite favorite}.\n\nDefines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFeederSender",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFeederSender",
              type: "string",
              optional: false,
              description: "New value for property <code>feederSender</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFeederSender feederSender}.\n\nSender for the comment feeder This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFeederThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFeederThumbnailSrc",
              type: "sap.ui.core.URI",
              optional: false,
              description:
                "New value for property <code>feederThumbnailSrc</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.\n\nURL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFlagged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlagged",
              type: "boolean",
              optional: false,
              description: "New value for property <code>flagged</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlagged flagged}.\n\nDefines whether the entry is flagged. This property is not supported for comment chunks.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSender",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSender",
              type: "string",
              optional: false,
              description: "New value for property <code>sender</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSender sender}.\n\nSender of the chunk\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setShared",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShared",
              type: "boolean",
              optional: false,
              description: "New value for property <code>shared</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShared shared}.\n\nDefines whether the entry shall be shared. This property is not supported for comment chunks.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
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
            "Sets a new value for property {@link #getText text}.\n\nThe FeedChunk text. @References are supported.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sThumbnailSrc",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>thumbnailSrc</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.\n\nURL to the thumbnail image.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTimestamp",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTimestamp",
              type: "string",
              optional: false,
              description: "New value for property <code>timestamp</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTimestamp timestamp}.\n\nFormat is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "unbindActionMenuItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getActionMenuItems actionMenuItems} from model data."
        },
        {
          name: "unbindComments",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeedChunk",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getComments comments} from model data."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Feeder",
      basename: "Feeder",
      resource: "sap/ui/ux3/Feeder.js",
      module: "sap/ui/ux3/Feeder",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "This feed control flavor represents a lean common feed, or a comment feed, with a text commit function. The control can be used stand alone or in a multiple way, and generally would be integrated directly into a UIArea.",
      experimental: {
        since: "1.2",
        text:
          "The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open."
      },
      deprecated: {
        since: "1.38",
        text: "Instead, use the <code>sap.m.FeedInput</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "thumbnailSrc",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              "URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.",
            methods: ["getThumbnailSrc", "setThumbnailSrc"]
          },
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "The text for the Feeder. @References are supported.",
            methods: ["getText", "setText"]
          },
          {
            name: "type",
            type: "sap.ui.ux3.FeederType",
            defaultValue: "Large",
            group: "Appearance",
            visibility: "public",
            description: "Type and size of the Feeder",
            methods: ["getType", "setType"]
          },
          {
            name: "placeholderText",
            type: "string",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description:
              "This property could be used for costum placeholder. If it is not set, the default text is used.",
            methods: ["getPlaceholderText", "setPlaceholderText"]
          }
        ],
        events: [
          {
            name: "submit",
            visibility: "public",
            description: "Event is fired when the entered text is submitted",
            parameters: {
              text: {
                name: "text",
                type: "string",
                description: "The text that is submitted"
              }
            },
            methods: ["attachSubmit", "detachSubmit", "fireSubmit"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Feeder.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "submit",
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
                    text: {
                      name: "text",
                      type: "string",
                      optional: false,
                      description: "The text that is submitted"
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the entered text is submitted"
        }
      ],
      methods: [
        {
          name: "attachSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feeder</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:submit submit} event of this <code>sap.ui.ux3.Feeder</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Feeder</code> itself.\n\nEvent is fired when the entered text is submitted"
        },
        {
          name: "detachSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:submit submit} event of this <code>sap.ui.ux3.Feeder</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Feeder with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireSubmit",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                text: {
                  name: "text",
                  type: "string",
                  optional: true,
                  description: "The text that is submitted"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:submit submit} to attached listeners."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.ux3.Feeder."
        },
        {
          name: "getPlaceholderText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>placeholderText</code>"
          },
          description:
            "Gets current value of property {@link #getPlaceholderText placeholderText}.\n\nThis property could be used for costum placeholder. If it is not set, the default text is used."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nThe text for the Feeder. @References are supported."
        },
        {
          name: "getThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>thumbnailSrc</code>"
          },
          description:
            "Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.\n\nURL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control."
        },
        {
          name: "getType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FeederType",
            description: "Value of property <code>type</code>"
          },
          description:
            "Gets current value of property {@link #getType type}.\n\nType and size of the Feeder\n\nDefault value is <code>Large</code>."
        },
        {
          name: "setPlaceholderText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sPlaceholderText",
              type: "string",
              optional: false,
              description: "New value for property <code>placeholderText</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPlaceholderText placeholderText}.\n\nThis property could be used for costum placeholder. If it is not set, the default text is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
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
            "Sets a new value for property {@link #getText text}.\n\nThe text for the Feeder. @References are supported.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setThumbnailSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sThumbnailSrc",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>thumbnailSrc</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.\n\nURL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Feeder",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sType",
              type: "sap.ui.ux3.FeederType",
              optional: false,
              description: "New value for property <code>type</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getType type}.\n\nType and size of the Feeder\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Large</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.FeederType",
      basename: "FeederType",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "FeederType",
      static: true,
      visibility: "public",
      description: "Type of a Feeder.",
      experimental: {
        since: "1.2",
        text:
          "The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open."
      },
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Comment",
          visibility: "public",
          static: true,
          type: "string",
          description: "comment feeder (small)"
        },
        {
          name: "Large",
          visibility: "public",
          static: true,
          type: "string",
          description: "large Feeder"
        },
        {
          name: "Medium",
          visibility: "public",
          static: true,
          type: "string",
          description: "medium feeder"
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.FollowActionState",
      basename: "FollowActionState",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "FollowActionState",
      static: true,
      visibility: "public",
      description: "Defines the states of the follow action",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Default",
          visibility: "public",
          static: true,
          type: "string",
          description: "default state"
        },
        {
          name: "Follow",
          visibility: "public",
          static: true,
          type: "string",
          description: "follow state"
        },
        {
          name: "Hold",
          visibility: "public",
          static: true,
          type: "string",
          description: "hold state"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.NavigationBar",
      basename: "NavigationBar",
      resource: "sap/ui/ux3/NavigationBar.js",
      module: "sap/ui/ux3/NavigationBar",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "Provides enhanced navigation capabilities and is the parent control of NavigationItem. It is displayed in the form of a horizontal line with switching markers depending on the currently selected item. The size of an item which is currently chosen by the user is enlarged. In the case that a large number of items are defined for the bar, this is made transparent to the user by showing symbols for scrolling options (forwards and backwards) to see the next or previous items.",
      deprecated: {
        since: "1.38",
        text:
          "Instead, use the <code>sap.m.IconTabBar</code>, <code>sap.m.TabContainer</code> or <code>sap.uxap.ObjectPageLayout</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "toplevelVariant",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Defines whether the navigation bar shall have top-level appearance",
            methods: ["getToplevelVariant", "setToplevelVariant"]
          },
          {
            name: "overflowItemsToUpperCase",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            since: "1.36",
            description:
              "Sets the appearance of the menu items in the overflow menu to uppercase",
            methods: [
              "getOverflowItemsToUpperCase",
              "setOverflowItemsToUpperCase"
            ]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..n",
            visibility: "public",
            description:
              "If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems association can be used. The NavigationBar follows the approach to use the items aggregation. If this aggregation is empty, associatedItems is used.",
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
            name: "overflowMenu",
            singularName: "overflowMenu",
            type: "sap.ui.commons.Menu",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Hidden aggregation for the overflow menu if applicable",
            methods: [
              "getOverflowMenu",
              "destroyOverflowMenu",
              "setOverflowMenu"
            ]
          }
        ],
        defaultAggregation: "items",
        associations: [
          {
            name: "selectedItem",
            singularName: "selectedItem",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..1",
            visibility: "public",
            description: "The selected NavigationItem.",
            methods: ["getSelectedItem", "setSelectedItem"]
          },
          {
            name: "associatedItems",
            singularName: "associatedItem",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..n",
            visibility: "public",
            description:
              "This association is ignored as long as the items aggregation is used; and supposed to be used alternatively when the items should be aggregated by other entities.",
            methods: [
              "getAssociatedItems",
              "addAssociatedItem",
              "removeAssociatedItem",
              "removeAllAssociatedItems"
            ]
          }
        ],
        events: [
          {
            name: "select",
            visibility: "public",
            description: "Event is fired when an item is selected by the user",
            parameters: {
              itemId: {
                name: "itemId",
                type: "string",
                description: "The ID of the newly selected NavigationItem."
              },
              item: {
                name: "item",
                type: "sap.ui.ux3.NavigationItem",
                description: "The newly selected NavigationItem."
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new NavigationBar.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                    itemId: {
                      name: "itemId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the newly selected NavigationItem."
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.ux3.NavigationItem",
                      optional: false,
                      description: "The newly selected NavigationItem."
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when an item is selected by the user"
        }
      ],
      methods: [
        {
          name: "addAssociatedItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAssociatedItem",
              type: "sap.ui.core.ID|sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "The associatedItems to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some associatedItem into the association {@link #getAssociatedItems associatedItems}."
        },
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.ux3.NavigationItem",
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
            type: "sap.ui.ux3.NavigationBar",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NavigationBar</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.ux3.NavigationBar</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.NavigationBar</code> itself.\n\nEvent is fired when an item is selected by the user"
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
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
            type: "sap.ui.ux3.NavigationBar",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.ux3.NavigationBar</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.NavigationBar with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireSelect",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                itemId: {
                  name: "itemId",
                  type: "string",
                  optional: true,
                  description: "The ID of the newly selected NavigationItem."
                },
                item: {
                  name: "item",
                  type: "sap.ui.ux3.NavigationItem",
                  optional: true,
                  description: "The newly selected NavigationItem."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:select select} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getAssociatedItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]"
          },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAssociatedItems associatedItems}."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]"
          },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nIf the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems association can be used. The NavigationBar follows the approach to use the items aggregation. If this aggregation is empty, associatedItems is used."
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
            "Returns a metadata object for class sap.ui.ux3.NavigationBar."
        },
        {
          name: "getOverflowItemsToUpperCase",
          visibility: "public",
          since: "1.36",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>overflowItemsToUpperCase</code>"
          },
          description:
            "Gets current value of property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.\n\nSets the appearance of the menu items in the overflow menu to uppercase\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSelectedItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or <code>null</code>."
        },
        {
          name: "getToplevelVariant",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>toplevelVariant</code>"
          },
          description:
            "Gets current value of property {@link #getToplevelVariant toplevelVariant}.\n\nDefines whether the navigation bar shall have top-level appearance\n\nDefault value is <code>false</code>."
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
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.ux3.NavigationItem",
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
          name: "isSelectedItemValid",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description:
            "Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if the aggregation is empty, in the associatedItems association."
        },
        {
          name: "removeAllAssociatedItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAssociatedItems associatedItems}."
        },
        {
          name: "removeAllItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAssociatedItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed associatedItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vAssociatedItem",
              type: "int|sap.ui.core.ID|sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The associatedItem to be removed or its index or ID"
            }
          ],
          description:
            "Removes an associatedItem from the association named {@link #getAssociatedItems associatedItems}."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "setAssociatedItems",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.ux3.NavigationBar"
          },
          parameters: [
            {
              name: "aItems",
              type: "sap.ui.ux3.NavigationItem[]",
              optional: false,
              description: "The items to associate"
            }
          ],
          description:
            "Replaces the currently associated items with the ones in the given array"
        },
        {
          name: "setOverflowItemsToUpperCase",
          visibility: "public",
          since: "1.36",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bOverflowItemsToUpperCase",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>overflowItemsToUpperCase</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.\n\nSets the appearance of the menu items in the overflow menu to uppercase\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSelectedItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedItem",
              type: "sap.ui.core.ID|sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedItem association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedItem selectedItem}."
        },
        {
          name: "setToplevelVariant",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bToplevelVariant",
              type: "boolean",
              optional: false,
              description: "New value for property <code>toplevelVariant</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getToplevelVariant toplevelVariant}.\n\nDefines whether the navigation bar shall have top-level appearance\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.NavigationItem",
      basename: "NavigationItem",
      resource: "sap/ui/ux3/NavigationItem.js",
      module: "sap/ui/ux3/NavigationItem",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Item",
      description: "Is the item to be used within the NavigationBar",
      deprecated: {
        since: "1.38",
        text:
          "Instead, use the <code>sap.m.IconTabBar</code>, <code>sap.m.TabContainer</code> or <code>sap.uxap.ObjectPageLayout</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            since: "1.9.0",
            description:
              "Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.",
            methods: ["getVisible", "setVisible"]
          },
          {
            name: "href",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              'Defines the link target URL. This property is optional and should only be set when required! The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application\'s responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).',
            methods: ["getHref", "setHref"]
          }
        ],
        aggregations: [
          {
            name: "subItems",
            singularName: "subItem",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Any NavigationItems on the next hierarchy level connected to this NavigationItem",
            methods: [
              "getSubItems",
              "destroySubItems",
              "insertSubItem",
              "addSubItem",
              "removeSubItem",
              "indexOfSubItem",
              "removeAllSubItems"
            ]
          }
        ],
        defaultAggregation: "subItems"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new NavigationItem.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addSubItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSubItem",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The subItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some subItem to the aggregation {@link #getSubItems subItems}."
        },
        {
          name: "destroySubItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the subItems in the aggregation {@link #getSubItems subItems}."
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
            "Creates a new subclass of class sap.ui.ux3.NavigationItem with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}."
        },
        {
          name: "getHref",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>href</code>"
          },
          description:
            'Gets current value of property {@link #getHref href}.\n\nDefines the link target URL. This property is optional and should only be set when required! The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application\'s responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).'
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
            "Returns a metadata object for class sap.ui.ux3.NavigationItem."
        },
        {
          name: "getSubItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]"
          },
          description:
            "Gets content of aggregation {@link #getSubItems subItems}.\n\nAny NavigationItems on the next hierarchy level connected to this NavigationItem"
        },
        {
          name: "getVisible",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nWhether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfSubItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oSubItem",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The subItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getSubItems subItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertSubItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSubItem",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "The subItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the subItem should be inserted at; for a negative value of <code>iIndex</code>, the subItem is inserted at position 0; for a value greater than the current size of the aggregation, the subItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a subItem into the aggregation {@link #getSubItems subItems}."
        },
        {
          name: "removeAllSubItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getSubItems subItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeSubItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description: "The removed subItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vSubItem",
              type: "int|string|sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The subItem to remove or its index or id"
            }
          ],
          description:
            "Removes a subItem from the aggregation {@link #getSubItems subItems}."
        },
        {
          name: "setHref",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHref",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>href</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getHref href}.\n\nDefines the link target URL. This property is optional and should only be set when required! The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application\'s responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.'
        },
        {
          name: "setVisible",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
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
            "Sets a new value for property {@link #getVisible visible}.\n\nWhether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.NotificationBar",
      basename: "NotificationBar",
      resource: "sap/ui/ux3/NotificationBar.js",
      module: "sap/ui/ux3/NotificationBar",
      export: "",
      static: true,
      visibility: "public",
      since: "1.7.0",
      extends: "sap.ui.core.Control",
      description:
        'A NotificationBar is a "toolbar" that can be added to a page to show messages and notifications from the application. Its position, height and width is inherited from the element that the notification bar is added to. The NotificationBar uses position: fixed; to always stay at the bottom of the screen. This CSS may sometimes cause issues when nested deeply inside other controls. To have a proper behavior of the NotificationBar use it as high in the control hierarchy as possible.',
      deprecated: {
        since: "1.38",
        text: "Instead, use the <code>sap.m.MessagePopover</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "visibleStatus",
            type: "sap.ui.ux3.NotificationBarStatus",
            defaultValue: "Default",
            group: "Misc",
            visibility: "public",
            description:
              "This property displays the bar corresponding to given status",
            methods: ["getVisibleStatus", "setVisibleStatus"]
          },
          {
            name: "resizeEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "This property enables the bar to be resized by the user.",
            methods: ["getResizeEnabled", "setResizeEnabled"]
          },
          {
            name: "alwaysShowToggler",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.",
            methods: ["getAlwaysShowToggler", "setAlwaysShowToggler"]
          }
        ],
        aggregations: [
          {
            name: "messageNotifier",
            singularName: "messageNotifier",
            type: "sap.ui.core.Element",
            cardinality: "0..1",
            visibility: "public",
            description: "Notifier that shows messages",
            methods: [
              "getMessageNotifier",
              "destroyMessageNotifier",
              "setMessageNotifier"
            ]
          },
          {
            name: "notifiers",
            singularName: "notifier",
            type: "sap.ui.core.Element",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Notifiers that monitor something within the application and display the corresponding notifications.",
            methods: [
              "getNotifiers",
              "destroyNotifiers",
              "insertNotifier",
              "addNotifier",
              "removeNotifier",
              "indexOfNotifier",
              "removeAllNotifiers"
            ]
          }
        ],
        events: [
          {
            name: "display",
            visibility: "public",
            description:
              "Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do.",
            parameters: {
              show: {
                name: "show",
                type: "boolean",
                description: "Indicates if the bar wants to be shown or hidden"
              }
            },
            methods: ["attachDisplay", "detachDisplay", "fireDisplay"]
          },
          {
            name: "resize",
            visibility: "public",
            since: "1.12.2",
            description:
              "This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event.",
            parameters: {
              status: {
                name: "status",
                type: "sap.ui.ux3.NotificationBarStatus",
                description:
                  "The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file."
              }
            },
            methods: ["attachResize", "detachResize", "fireResize"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new NotificationBar.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "display",
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
                    show: {
                      name: "show",
                      type: "boolean",
                      optional: false,
                      description:
                        "Indicates if the bar wants to be shown or hidden"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do."
        },
        {
          name: "resize",
          visibility: "public",
          since: "1.12.2",
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
                    status: {
                      name: "status",
                      type: "sap.ui.ux3.NotificationBarStatus",
                      optional: false,
                      description:
                        "The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file."
                    }
                  }
                }
              }
            }
          ],
          description:
            "This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event."
        }
      ],
      methods: [
        {
          name: "addNotifier",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oNotifier",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The notifier to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some notifier to the aggregation {@link #getNotifiers notifiers}."
        },
        {
          name: "attachDisplay",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:display display} event of this <code>sap.ui.ux3.NotificationBar</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.NotificationBar</code> itself.\n\nEvent is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do."
        },
        {
          name: "attachResize",
          visibility: "public",
          since: "1.12.2",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:resize resize} event of this <code>sap.ui.ux3.NotificationBar</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.NotificationBar</code> itself.\n\nThis event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event."
        },
        {
          name: "destroyMessageNotifier",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the messageNotifier in the aggregation {@link #getMessageNotifier messageNotifier}."
        },
        {
          name: "destroyNotifiers",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the notifiers in the aggregation {@link #getNotifiers notifiers}."
        },
        {
          name: "detachDisplay",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:display display} event of this <code>sap.ui.ux3.NotificationBar</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachResize",
          visibility: "public",
          since: "1.12.2",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:resize resize} event of this <code>sap.ui.ux3.NotificationBar</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.NotificationBar with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireDisplay",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                show: {
                  name: "show",
                  type: "boolean",
                  optional: true,
                  description:
                    "Indicates if the bar wants to be shown or hidden"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:display display} to attached listeners."
        },
        {
          name: "fireResize",
          visibility: "protected",
          since: "1.12.2",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                status: {
                  name: "status",
                  type: "sap.ui.ux3.NotificationBarStatus",
                  optional: true,
                  description:
                    "The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:resize resize} to attached listeners."
        },
        {
          name: "getAlwaysShowToggler",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>alwaysShowToggler</code>"
          },
          description:
            "Gets current value of property {@link #getAlwaysShowToggler alwaysShowToggler}.\n\nThis property defines if the toggler should be displayed the whole time when the NotificationBar is shown.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMessageNotifier",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element"
          },
          description:
            "Gets content of aggregation {@link #getMessageNotifier messageNotifier}.\n\nNotifier that shows messages"
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
            "Returns a metadata object for class sap.ui.ux3.NotificationBar."
        },
        {
          name: "getNotifiers",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element[]"
          },
          description:
            "Gets content of aggregation {@link #getNotifiers notifiers}.\n\nNotifiers that monitor something within the application and display the corresponding notifications."
        },
        {
          name: "getResizeEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>resizeEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getResizeEnabled resizeEnabled}.\n\nThis property enables the bar to be resized by the user.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getVisibleStatus",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBarStatus",
            description: "Value of property <code>visibleStatus</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleStatus visibleStatus}.\n\nThis property displays the bar corresponding to given status\n\nDefault value is <code>Default</code>."
        },
        {
          name: "hasItems",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description:
            "This method checks if the NotificationBar has any items (notifications or messages) to show and returns true if there are any items to show. So the application should decide if the bar should be displayed."
        },
        {
          name: "indexOfNotifier",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oNotifier",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The notifier whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getNotifiers notifiers}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertNotifier",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oNotifier",
              type: "sap.ui.core.Element",
              optional: false,
              description:
                "The notifier to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the notifier should be inserted at; for a negative value of <code>iIndex</code>, the notifier is inserted at position 0; for a value greater than the current size of the aggregation, the notifier is inserted at the last position"
            }
          ],
          description:
            "Inserts a notifier into the aggregation {@link #getNotifiers notifiers}."
        },
        {
          name: "removeAllNotifiers",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getNotifiers notifiers}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeNotifier",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element",
            description: "The removed notifier or <code>null</code>"
          },
          parameters: [
            {
              name: "vNotifier",
              type: "int|string|sap.ui.core.Element",
              optional: false,
              description: "The notifier to remove or its index or id"
            }
          ],
          description:
            "Removes a notifier from the aggregation {@link #getNotifiers notifiers}."
        },
        {
          name: "setAlwaysShowToggler",
          visibility: "public",
          since: "1.22.11",
          parameters: [
            {
              name: "bAlwaysShow",
              type: "boolean",
              optional: false,
              description:
                "if the toggler should be visible all the time set this parameter to <b>true</b>"
            }
          ]
        },
        {
          name: "setMessageNotifier",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMessageNotifier",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The messageNotifier to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getMessageNotifier messageNotifier}."
        },
        {
          name: "setResizeEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bResizeEnabled",
              type: "boolean",
              optional: false,
              description: "New value for property <code>resizeEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResizeEnabled resizeEnabled}.\n\nThis property enables the bar to be resized by the user.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisibleStatus",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sVisibleStatus",
              type: "sap.ui.ux3.NotificationBarStatus",
              optional: false,
              description: "New value for property <code>visibleStatus</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleStatus visibleStatus}.\n\nThis property displays the bar corresponding to given status\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Default</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.NotificationBarStatus",
      basename: "NotificationBarStatus",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "NotificationBarStatus",
      static: true,
      visibility: "public",
      description:
        "This entries are used to set the visibility status of a NotificationBar",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Default",
          visibility: "public",
          static: true,
          type: "string",
          description: "Default height for the bar"
        },
        {
          name: "Max",
          visibility: "public",
          static: true,
          type: "string",
          description: "Bar should be maximized"
        },
        {
          name: "Min",
          visibility: "public",
          static: true,
          type: "string",
          description: "Bar should be minimized"
        },
        {
          name: "None",
          visibility: "public",
          static: true,
          type: "string",
          description: "Bar should not be visible"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Notifier",
      basename: "Notifier",
      resource: "sap/ui/ux3/Notifier.js",
      module: "sap/ui/ux3/Notifier",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description:
        "This element can be docked to a notification bar to show notification items",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Icon of the control that should be displayed within the corresponding bar",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Defines the title that should be displayed within the opening popup",
            methods: ["getTitle", "setTitle"]
          }
        ],
        aggregations: [
          {
            name: "messages",
            singularName: "message",
            type: "sap.ui.core.Message",
            cardinality: "0..n",
            visibility: "public",
            description: "Messages of this notifier.",
            methods: [
              "getMessages",
              "destroyMessages",
              "insertMessage",
              "addMessage",
              "removeMessage",
              "indexOfMessage",
              "removeAllMessages"
            ]
          },
          {
            name: "views",
            singularName: "view",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "hidden",
            description:
              "Views aggregated with this Notifier and managed by the parent NotificationBar.",
            methods: [
              "getViews",
              "destroyViews",
              "insertView",
              "addView",
              "removeView",
              "indexOfView",
              "removeAllViews"
            ]
          }
        ],
        events: [
          {
            name: "messageSelected",
            visibility: "public",
            description:
              "Event is fired when a message of the notifiers was selected.",
            parameters: {
              message: {
                name: "message",
                type: "sap.ui.core.Message",
                description: "The message that was selected"
              },
              notifier: {
                name: "notifier",
                type: "sap.ui.ux3.Notifier",
                description: "The notifier that contains the selected message"
              }
            },
            methods: [
              "attachMessageSelected",
              "detachMessageSelected",
              "fireMessageSelected"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Notifier.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "messageSelected",
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
                    message: {
                      name: "message",
                      type: "sap.ui.core.Message",
                      optional: false,
                      description: "The message that was selected"
                    },
                    notifier: {
                      name: "notifier",
                      type: "sap.ui.ux3.Notifier",
                      optional: false,
                      description:
                        "The notifier that contains the selected message"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when a message of the notifiers was selected."
        }
      ],
      methods: [
        {
          name: "addMessage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMessage",
              type: "sap.ui.core.Message",
              optional: false,
              description: "The message to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some message to the aggregation {@link #getMessages messages}."
        },
        {
          name: "attachMessageSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Notifier</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:messageSelected messageSelected} event of this <code>sap.ui.ux3.Notifier</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Notifier</code> itself.\n\nEvent is fired when a message of the notifiers was selected."
        },
        {
          name: "destroyMessages",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the messages in the aggregation {@link #getMessages messages}."
        },
        {
          name: "detachMessageSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:messageSelected messageSelected} event of this <code>sap.ui.ux3.Notifier</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Notifier with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "fireMessageSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                message: {
                  name: "message",
                  type: "sap.ui.core.Message",
                  optional: true,
                  description: "The message that was selected"
                },
                notifier: {
                  name: "notifier",
                  type: "sap.ui.ux3.Notifier",
                  optional: true,
                  description: "The notifier that contains the selected message"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:messageSelected messageSelected} to attached listeners."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nIcon of the control that should be displayed within the corresponding bar"
        },
        {
          name: "getMessages",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Message[]"
          },
          description:
            "Gets content of aggregation {@link #getMessages messages}.\n\nMessages of this notifier."
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
            "Returns a metadata object for class sap.ui.ux3.Notifier."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nDefines the title that should be displayed within the opening popup"
        },
        {
          name: "hasItems",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description: "This method checks if the notifier has any items."
        },
        {
          name: "indexOfMessage",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMessage",
              type: "sap.ui.core.Message",
              optional: false,
              description: "The message whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Message</code> in the aggregation {@link #getMessages messages}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertMessage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMessage",
              type: "sap.ui.core.Message",
              optional: false,
              description:
                "The message to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the message should be inserted at; for a negative value of <code>iIndex</code>, the message is inserted at position 0; for a value greater than the current size of the aggregation, the message is inserted at the last position"
            }
          ],
          description:
            "Inserts a message into the aggregation {@link #getMessages messages}."
        },
        {
          name: "removeAllMessages",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Message[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMessages messages}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeMessage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Message",
            description: "The removed message or <code>null</code>"
          },
          parameters: [
            {
              name: "vMessage",
              type: "int|string|sap.ui.core.Message",
              optional: false,
              description: "The message to remove or its index or id"
            }
          ],
          description:
            "Removes a message from the aggregation {@link #getMessages messages}."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
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
            "Sets a new value for property {@link #getIcon icon}.\n\nIcon of the control that should be displayed within the corresponding bar\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Notifier",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nDefines the title that should be displayed within the opening popup\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Overlay",
      basename: "Overlay",
      resource: "sap/ui/ux3/Overlay.js",
      module: "sap/ui/ux3/Overlay",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      implements: ["sap.ui.core.PopupInterface"],
      description: "Overlay Control",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "openButtonVisible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Defines whether the 'Open' button shall be visible.",
            methods: ["getOpenButtonVisible", "setOpenButtonVisible"]
          },
          {
            name: "closeButtonVisible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Defines whether the 'Close' button shall be visible.",
            methods: ["getCloseButtonVisible", "setCloseButtonVisible"]
          }
        ],
        events: [
          {
            name: "close",
            visibility: "public",
            description: "Event is fired when the Overlay starts closing.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "The ID of the Overlay instance."
              }
            },
            methods: ["attachClose", "detachClose", "fireClose"]
          },
          {
            name: "closed",
            visibility: "public",
            description: "Event is fired when the Overlay is closed.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "The ID of the Overlay instance."
              }
            },
            methods: ["attachClosed", "detachClosed", "fireClosed"]
          },
          {
            name: "openNew",
            visibility: "public",
            description:
              "Event is fired when the 'Open' button of the Overlay is clicked.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "The ID of the Overlay instance."
              }
            },
            methods: ["attachOpenNew", "detachOpenNew", "fireOpenNew"]
          },
          {
            name: "open",
            visibility: "public",
            description: "Event is fired when the Overlay is opened.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "The ID of the Overlay instance"
              }
            },
            methods: ["attachOpen", "detachOpen", "fireOpen"]
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
          "Constructor for a new Overlay.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "close",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "The ID of the Overlay instance."
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the Overlay starts closing."
        },
        {
          name: "closed",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "The ID of the Overlay instance."
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the Overlay is closed."
        },
        {
          name: "open",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "The ID of the Overlay instance"
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when the Overlay is opened."
        },
        {
          name: "openNew",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "The ID of the Overlay instance."
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when the 'Open' button of the Overlay is clicked."
        }
      ],
      methods: [
        {
          name: "attachClose",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:close close} event of this <code>sap.ui.ux3.Overlay</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.\n\nEvent is fired when the Overlay starts closing."
        },
        {
          name: "attachClosed",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:closed closed} event of this <code>sap.ui.ux3.Overlay</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.\n\nEvent is fired when the Overlay is closed."
        },
        {
          name: "attachOpen",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:open open} event of this <code>sap.ui.ux3.Overlay</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.\n\nEvent is fired when the Overlay is opened."
        },
        {
          name: "attachOpenNew",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:openNew openNew} event of this <code>sap.ui.ux3.Overlay</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.\n\nEvent is fired when the 'Open' button of the Overlay is clicked."
        },
        {
          name: "close",
          visibility: "public",
          "ui5-metamodel": true,
          description: "Closes the Overlay."
        },
        {
          name: "detachClose",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:close close} event of this <code>sap.ui.ux3.Overlay</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachClosed",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:closed closed} event of this <code>sap.ui.ux3.Overlay</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachOpen",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:open open} event of this <code>sap.ui.ux3.Overlay</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachOpenNew",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:openNew openNew} event of this <code>sap.ui.ux3.Overlay</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Overlay with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireClose",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "The ID of the Overlay instance."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:close close} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireClosed",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "The ID of the Overlay instance."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:closed closed} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireOpen",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "The ID of the Overlay instance"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:open open} to attached listeners."
        },
        {
          name: "fireOpenNew",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "The ID of the Overlay instance."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:openNew openNew} to attached listeners."
        },
        {
          name: "getCloseButtonVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>closeButtonVisible</code>"
          },
          description:
            "Gets current value of property {@link #getCloseButtonVisible closeButtonVisible}.\n\nDefines whether the 'Close' button shall be visible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.ux3.Overlay."
        },
        {
          name: "getOpenButtonVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>openButtonVisible</code>"
          },
          description:
            "Gets current value of property {@link #getOpenButtonVisible openButtonVisible}.\n\nDefines whether the 'Open' button shall be visible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "isOpen",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description: "Checks whether Overlay is open."
        },
        {
          name: "open",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "initialFocusId",
              type: "string",
              optional: false,
              description:
                "ID of the control that gets focused when the overlay is openend"
            }
          ],
          description: "Opens the Overlay."
        },
        {
          name: "setCloseButtonVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bCloseButtonVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>closeButtonVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCloseButtonVisible closeButtonVisible}.\n\nDefines whether the 'Close' button shall be visible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setOpenButtonVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Overlay",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bOpenButtonVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>openButtonVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getOpenButtonVisible openButtonVisible}.\n\nDefines whether the 'Open' button shall be visible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.OverlayContainer",
      basename: "OverlayContainer",
      resource: "sap/ui/ux3/OverlayContainer.js",
      module: "sap/ui/ux3/OverlayContainer",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.ux3.Overlay",
      description:
        "Is to be embedded into the Overlay control as content container",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Aggregation for content",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new OverlayContainer.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.OverlayContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.OverlayContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
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
            "Creates a new subclass of class sap.ui.ux3.OverlayContainer with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nAggregation for content"
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
            "Returns a metadata object for class sap.ui.ux3.OverlayContainer."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.OverlayContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.OverlayDialog",
      basename: "OverlayDialog",
      resource: "sap/ui/ux3/OverlayDialog.js",
      module: "sap/ui/ux3/OverlayDialog",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.ux3.Overlay",
      description:
        "Dialog implementation based on the Overlay. If used in a Shell it leaves the Tool-Palette, Pane-Bar and Header-Items accessible.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto",
            group: "Dimension",
            visibility: "public",
            description:
              'Determines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay width.',
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto",
            group: "Dimension",
            visibility: "public",
            description:
              'Determines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay height.',
            methods: ["getHeight", "setHeight"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Content for the OverlayDialog.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
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
              "ID for the new control, generated automatically if no ID is given."
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control."
          }
        ],
        description:
          "Constructor for a new OverlayDialog.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.OverlayDialog",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.OverlayDialog",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
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
            "Creates a new subclass of class sap.ui.ux3.OverlayDialog with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nContent for the OverlayDialog."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            'Gets current value of property {@link #getHeight height}.\n\nDetermines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay height.\n\nDefault value is <code>auto</code>.'
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
            "Returns a metadata object for class sap.ui.ux3.OverlayDialog."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            'Gets current value of property {@link #getWidth width}.\n\nDetermines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay width.\n\nDefault value is <code>auto</code>.'
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.OverlayDialog",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setHeight",
          visibility: "public",
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false
            }
          ],
          description: "The height for the OverlayDialog."
        },
        {
          name: "setOpenButtonVisible",
          visibility: "public",
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false
            }
          ],
          description: "This Method is not supported for the OverlayDialog."
        },
        {
          name: "setWidth",
          visibility: "public",
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false
            }
          ],
          description: "The width for the OverlayDialog."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.QuickView",
      basename: "QuickView",
      resource: "sap/ui/ux3/QuickView.js",
      module: "sap/ui/ux3/QuickView",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.commons.CalloutBase",
      description:
        "QuickView is a small popup with a short overview of a Thing. QuickView is shown when a user holds the mouse pointer over a related screen element.",
      deprecated: {
        since: "1.38",
        text: "Instead, use the <code>sap.m.QuickView</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "type",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.",
            methods: ["getType", "setType"]
          },
          {
            name: "firstTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Thing name shown in the header of the QuickView",
            methods: ["getFirstTitle", "setFirstTitle"]
          },
          {
            name: "firstTitleHref",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "URI to Thing Inspector",
            methods: ["getFirstTitleHref", "setFirstTitleHref"]
          },
          {
            name: "secondTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Optional short text shown under the firstTitle",
            methods: ["getSecondTitle", "setSecondTitle"]
          },
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            description:
              "Control width as common CSS-size (px or % as unit, for example).",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "showActionBar",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Show Action Bar",
            methods: ["getShowActionBar", "setShowActionBar"]
          },
          {
            name: "followState",
            type: "sap.ui.ux3.FollowActionState",
            defaultValue: "Default",
            group: "Misc",
            visibility: "public",
            description: "Follow State of a Thing",
            methods: ["getFollowState", "setFollowState"]
          },
          {
            name: "flagState",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "State of Flag Action",
            methods: ["getFlagState", "setFlagState"]
          },
          {
            name: "favoriteState",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "State Of favorite Action",
            methods: ["getFavoriteState", "setFavoriteState"]
          },
          {
            name: "favoriteActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Favorite action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getFavoriteActionEnabled", "setFavoriteActionEnabled"]
          },
          {
            name: "updateActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Update action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getUpdateActionEnabled", "setUpdateActionEnabled"]
          },
          {
            name: "followActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Follow action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getFollowActionEnabled", "setFollowActionEnabled"]
          },
          {
            name: "flagActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Flag action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getFlagActionEnabled", "setFlagActionEnabled"]
          },
          {
            name: "openActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Open Thing action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getOpenActionEnabled", "setOpenActionEnabled"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Element",
            cardinality: "0..n",
            visibility: "public",
            description: "Body content of the QuickView",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "actions",
            singularName: "action",
            type: "sap.ui.ux3.ThingAction",
            cardinality: "0..n",
            visibility: "public",
            description: "Actions of a Thing",
            methods: [
              "getActions",
              "destroyActions",
              "insertAction",
              "addAction",
              "removeAction",
              "indexOfAction",
              "removeAllActions"
            ]
          },
          {
            name: "actionBar",
            singularName: "actionBar",
            type: "sap.ui.ux3.ActionBar",
            cardinality: "0..1",
            visibility: "public",
            description:
              "ActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed only when the showActionBar property is set to true.",
            methods: ["getActionBar", "destroyActionBar", "setActionBar"]
          }
        ],
        events: [
          {
            name: "actionSelected",
            visibility: "public",
            description: "Action is selected in Action Bar",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of selected ThingAction"
              },
              action: {
                name: "action",
                type: "sap.ui.ux3.ThingAction",
                description: "Selected ThingAction"
              },
              newState: {
                name: "newState",
                type: "string",
                description:
                  "New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'"
              }
            },
            methods: [
              "attachActionSelected",
              "detachActionSelected",
              "fireActionSelected"
            ]
          },
          {
            name: "feedSubmit",
            visibility: "public",
            description: "Fired when a new feed entry is submitted.",
            parameters: {
              text: {
                name: "text",
                type: "string",
                description: "Feed text"
              }
            },
            methods: ["attachFeedSubmit", "detachFeedSubmit", "fireFeedSubmit"]
          },
          {
            name: "navigate",
            visibility: "public",
            description:
              "Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation.",
            parameters: {
              href: {
                name: "href",
                type: "string",
                description: "URI of the Thing Inspector application."
              }
            },
            methods: ["attachNavigate", "detachNavigate", "fireNavigate"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new QuickView.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "actionSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "Id of selected ThingAction"
                    },
                    action: {
                      name: "action",
                      type: "sap.ui.ux3.ThingAction",
                      optional: false,
                      description: "Selected ThingAction"
                    },
                    newState: {
                      name: "newState",
                      type: "string",
                      optional: false,
                      description:
                        "New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'"
                    }
                  }
                }
              }
            }
          ],
          description: "Action is selected in Action Bar"
        },
        {
          name: "feedSubmit",
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
                    text: {
                      name: "text",
                      type: "string",
                      optional: false,
                      description: "Feed text"
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when a new feed entry is submitted."
        },
        {
          name: "navigate",
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
                    href: {
                      name: "href",
                      type: "string",
                      optional: false,
                      description: "URI of the Thing Inspector application."
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation."
        }
      ],
      methods: [
        {
          name: "addAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some action to the aggregation {@link #getActions actions}."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "attachActionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.QuickView</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.QuickView</code> itself.\n\nAction is selected in Action Bar"
        },
        {
          name: "attachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.QuickView</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.QuickView</code> itself.\n\nFired when a new feed entry is submitted."
        },
        {
          name: "attachNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:navigate navigate} event of this <code>sap.ui.ux3.QuickView</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.QuickView</code> itself.\n\nEvent is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation."
        },
        {
          name: "destroyActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the actionBar in the aggregation {@link #getActionBar actionBar}."
        },
        {
          name: "destroyActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actions in the aggregation {@link #getActions actions}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "detachActionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.QuickView</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.QuickView</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:navigate navigate} event of this <code>sap.ui.ux3.QuickView</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.QuickView with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.CalloutBase.extend}."
        },
        {
          name: "fireActionSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of selected ThingAction"
                },
                action: {
                  name: "action",
                  type: "sap.ui.ux3.ThingAction",
                  optional: true,
                  description: "Selected ThingAction"
                },
                newState: {
                  name: "newState",
                  type: "string",
                  optional: true,
                  description:
                    "New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:actionSelected actionSelected} to attached listeners."
        },
        {
          name: "fireFeedSubmit",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                text: {
                  name: "text",
                  type: "string",
                  optional: true,
                  description: "Feed text"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:feedSubmit feedSubmit} to attached listeners."
        },
        {
          name: "fireNavigate",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                href: {
                  name: "href",
                  type: "string",
                  optional: true,
                  description: "URI of the Thing Inspector application."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:navigate navigate} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar"
          },
          description:
            "Gets content of aggregation {@link #getActionBar actionBar}.\n\nActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed only when the showActionBar property is set to true."
        },
        {
          name: "getActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction[]"
          },
          description:
            "Gets content of aggregation {@link #getActions actions}.\n\nActions of a Thing"
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nBody content of the QuickView"
        },
        {
          name: "getFavoriteActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>favoriteActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.\n\nFavorite action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFavoriteState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>favoriteState</code>"
          },
          description:
            "Gets current value of property {@link #getFavoriteState favoriteState}.\n\nState Of favorite Action\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFirstTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>firstTitle</code>"
          },
          description:
            "Gets current value of property {@link #getFirstTitle firstTitle}.\n\nThing name shown in the header of the QuickView"
        },
        {
          name: "getFirstTitleHref",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>firstTitleHref</code>"
          },
          description:
            "Gets current value of property {@link #getFirstTitleHref firstTitleHref}.\n\nURI to Thing Inspector"
        },
        {
          name: "getFlagActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flagActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.\n\nFlag action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFlagState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flagState</code>"
          },
          description:
            "Gets current value of property {@link #getFlagState flagState}.\n\nState of Flag Action\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFollowActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>followActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.\n\nFollow action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFollowState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FollowActionState",
            description: "Value of property <code>followState</code>"
          },
          description:
            "Gets current value of property {@link #getFollowState followState}.\n\nFollow State of a Thing\n\nDefault value is <code>Default</code>."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nURI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal)."
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
            "Returns a metadata object for class sap.ui.ux3.QuickView."
        },
        {
          name: "getOpenActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>openActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getOpenActionEnabled openActionEnabled}.\n\nOpen Thing action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getSecondTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>secondTitle</code>"
          },
          description:
            "Gets current value of property {@link #getSecondTitle secondTitle}.\n\nOptional short text shown under the firstTitle"
        },
        {
          name: "getShowActionBar",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showActionBar</code>"
          },
          description:
            "Gets current value of property {@link #getShowActionBar showActionBar}.\n\nShow Action Bar\n\nDefault value is <code>true</code>."
        },
        {
          name: "getType",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>type</code>"
          },
          description:
            "Gets current value of property {@link #getType type}.\n\nThing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView."
        },
        {
          name: "getUpdateActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>updateActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.\n\nUpdate action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nControl width as common CSS-size (px or % as unit, for example)."
        },
        {
          name: "indexOfAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position"
            }
          ],
          description:
            "Inserts a action into the aggregation {@link #getActions actions}."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Element",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
            description: "The removed action or <code>null</code>"
          },
          parameters: [
            {
              name: "vAction",
              type: "int|string|sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action to remove or its index or id"
            }
          ],
          description:
            "Removes a action from the aggregation {@link #getActions actions}."
        },
        {
          name: "removeAllActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getActions actions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Element",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oActionBar",
              type: "sap.ui.ux3.ActionBar",
              optional: false,
              description: "The actionBar to set"
            }
          ],
          description: "Sets the aggregated {@link #getActionBar actionBar}."
        },
        {
          name: "setFavoriteActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFavoriteActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>favoriteActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.\n\nFavorite action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFavoriteState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFavoriteState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>favoriteState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFavoriteState favoriteState}.\n\nState Of favorite Action\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFirstTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFirstTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>firstTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFirstTitle firstTitle}.\n\nThing name shown in the header of the QuickView\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFirstTitleHref",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFirstTitleHref",
              type: "string",
              optional: false,
              description: "New value for property <code>firstTitleHref</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFirstTitleHref firstTitleHref}.\n\nURI to Thing Inspector\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFlagActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlagActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>flagActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.\n\nFlag action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFlagState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlagState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>flagState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlagState flagState}.\n\nState of Flag Action\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFollowActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFollowActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>followActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.\n\nFollow action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFollowState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFollowState",
              type: "sap.ui.ux3.FollowActionState",
              optional: false,
              description: "New value for property <code>followState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFollowState followState}.\n\nFollow State of a Thing\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Default</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
            "Sets a new value for property {@link #getIcon icon}.\n\nURI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setOpenActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bOpenActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>openActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getOpenActionEnabled openActionEnabled}.\n\nOpen Thing action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSecondTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSecondTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>secondTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSecondTitle secondTitle}.\n\nOptional short text shown under the firstTitle\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setShowActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowActionBar",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showActionBar</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowActionBar showActionBar}.\n\nShow Action Bar\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sType",
              type: "string",
              optional: false,
              description: "New value for property <code>type</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getType type}.\n\nThing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setUpdateActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpdateActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>updateActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.\n\nUpdate action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.QuickView",
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
            "Sets a new value for property {@link #getWidth width}.\n\nControl width as common CSS-size (px or % as unit, for example).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.Shell",
      basename: "Shell",
      resource: "sap/ui/ux3/Shell.js",
      module: "sap/ui/ux3/Shell",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "The Ux3 GoldReflection Shell, which is an application frame with navigation capabilities. It is supposed to be added to a direct child of the BODY tag of a page and there should be no other parts of the page consuming space outside the Shell.",
      deprecated: {
        since: "1.38",
        text: "replaced by {@link sap.m.Shell}"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "appTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.",
            methods: ["getAppTitle", "setAppTitle"]
          },
          {
            name: "appIcon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.",
            methods: ["getAppIcon", "setAppIcon"]
          },
          {
            name: "appIconTooltip",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The tooltip of the application icon in the header",
            methods: ["getAppIconTooltip", "setAppIconTooltip"]
          },
          {
            name: "showLogoutButton",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the Logoff button in the header should be displayed or not.",
            methods: ["getShowLogoutButton", "setShowLogoutButton"]
          },
          {
            name: "logoutButtonTooltip",
            type: "string",
            defaultValue: null,
            group: "Accessibility",
            visibility: "public",
            since: "1.9.0",
            description:
              'The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.',
            methods: ["getLogoutButtonTooltip", "setLogoutButtonTooltip"]
          },
          {
            name: "showSearchTool",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              'Whether the "Global Search" tool should be displayed or not.',
            methods: ["getShowSearchTool", "setShowSearchTool"]
          },
          {
            name: "showInspectorTool",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              'Whether the "Inspector" tool should be displayed or not.',
            deprecated: {
              since: "1.7.2",
              text:
                "According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger it from the respective elements in the Shell content."
            },
            methods: ["getShowInspectorTool", "setShowInspectorTool"]
          },
          {
            name: "showFeederTool",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              'Whether the "Feeder" tool should be displayed or not.',
            methods: ["getShowFeederTool", "setShowFeederTool"]
          },
          {
            name: "showTools",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the tool area should be displayed at all or not.",
            methods: ["getShowTools", "setShowTools"]
          },
          {
            name: "showPane",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the pane bar should be displayed at all or not.",
            methods: ["getShowPane", "setShowPane"]
          },
          {
            name: "headerType",
            type: "sap.ui.ux3.ShellHeaderType",
            defaultValue: "Standard",
            group: "Misc",
            visibility: "public",
            description:
              "Defines which header type to be used. Depending on the header type some other functionality might be obsolete.",
            methods: ["getHeaderType", "setHeaderType"]
          },
          {
            name: "designType",
            type: "sap.ui.ux3.ShellDesignType",
            defaultValue: "Standard",
            group: "Misc",
            visibility: "public",
            since: "1.12.0",
            description: "Defines which design type is to be used.",
            methods: ["getDesignType", "setDesignType"]
          },
          {
            name: "paneWidth",
            type: "int",
            defaultValue: 250,
            group: "Misc",
            visibility: "public",
            description:
              "The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).",
            methods: ["getPaneWidth", "setPaneWidth"]
          },
          {
            name: "applyContentPadding",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            since: "1.9.0",
            description:
              "Whether the Shell content area should have a theme-dependent padding or not.",
            methods: ["getApplyContentPadding", "setApplyContentPadding"]
          },
          {
            name: "fullHeightContent",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            since: "1.9.0",
            description:
              'If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.',
            methods: ["getFullHeightContent", "setFullHeightContent"]
          },
          {
            name: "allowOverlayHeaderAccess",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            since: "1.14.0",
            description:
              "Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.",
            methods: [
              "getAllowOverlayHeaderAccess",
              "setAllowOverlayHeaderAccess"
            ]
          }
        ],
        aggregations: [
          {
            name: "worksetItems",
            singularName: "worksetItem",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..n",
            visibility: "public",
            description: "The workset items.",
            methods: [
              "getWorksetItems",
              "destroyWorksetItems",
              "insertWorksetItem",
              "addWorksetItem",
              "removeWorksetItem",
              "indexOfWorksetItem",
              "removeAllWorksetItems"
            ]
          },
          {
            name: "paneBarItems",
            singularName: "paneBarItem",
            type: "sap.ui.core.Item",
            cardinality: "0..n",
            visibility: "public",
            description: "The items to appear in the PaneBar.",
            methods: [
              "getPaneBarItems",
              "destroyPaneBarItems",
              "insertPaneBarItem",
              "addPaneBarItem",
              "removePaneBarItem",
              "indexOfPaneBarItem",
              "removeAllPaneBarItems"
            ]
          },
          {
            name: "paneContent",
            singularName: "paneContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The content to appear in the pane area.",
            methods: [
              "getPaneContent",
              "destroyPaneContent",
              "insertPaneContent",
              "addPaneContent",
              "removePaneContent",
              "indexOfPaneContent",
              "removeAllPaneContent"
            ]
          },
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "toolPopups",
            singularName: "toolPopup",
            type: "sap.ui.ux3.ToolPopup",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The items which appear in the ToolPalette and are opened as popup when clicked.",
            methods: [
              "getToolPopups",
              "destroyToolPopups",
              "insertToolPopup",
              "addToolPopup",
              "removeToolPopup",
              "indexOfToolPopup",
              "removeAllToolPopups"
            ]
          },
          {
            name: "headerItems",
            singularName: "headerItem",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Controls to appear in the header next to the logout button. It is recommended to only use controls of type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level.",
            methods: [
              "getHeaderItems",
              "destroyHeaderItems",
              "insertHeaderItem",
              "addHeaderItem",
              "removeHeaderItem",
              "indexOfHeaderItem",
              "removeAllHeaderItems"
            ]
          },
          {
            name: "notificationBar",
            singularName: "notificationBar",
            type: "sap.ui.ux3.NotificationBar",
            cardinality: "0..1",
            visibility: "public",
            since: "1.7.0",
            description:
              "The NotificationBar which should be integrated into the Shell.",
            methods: [
              "getNotificationBar",
              "destroyNotificationBar",
              "setNotificationBar"
            ]
          },
          {
            name: "_paneOverflowMenu",
            singularName: "_paneOverflowMenu",
            type: "sap.ui.commons.Menu",
            cardinality: "0..1",
            visibility: "hidden",
            since: "1.14.0",
            description:
              "The menu that is shown when there are too many pane-bar entries to fit onto the screen. It is shown after a click on the overflow button that appears in that case.",
            methods: [
              "get_paneOverflowMenu",
              "destroy_paneOverflowMenu",
              "set_paneOverflowMenu"
            ]
          }
        ],
        defaultAggregation: "content",
        associations: [
          {
            name: "selectedWorksetItem",
            singularName: "selectedWorksetItem",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The ID of the Item that is currently selected. When setting, the NavigationItem itself can be given instead of its ID. There will not be a worksetItemSelected event, the application is responsible to show the proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in this Shell, the first item (and first sub-item) will be selected after the call. When getting, always the ID is returned, by which the NavigationItem instance can be retrieved.",
            methods: ["getSelectedWorksetItem", "setSelectedWorksetItem"]
          }
        ],
        events: [
          {
            name: "worksetItemSelected",
            visibility: "public",
            description:
              "Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description:
                  "The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given."
              },
              item: {
                name: "item",
                type: "sap.ui.ux3.NavigationItem",
                description: "The selected NavigationItem"
              },
              key: {
                name: "key",
                type: "string",
                description:
                  "The key of the selected NavigationItem (or null if there is no key)"
              }
            },
            methods: [
              "attachWorksetItemSelected",
              "detachWorksetItemSelected",
              "fireWorksetItemSelected"
            ]
          },
          {
            name: "paneBarItemSelected",
            visibility: "public",
            description:
              "An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "The ID of the selected PaneBarItem."
              },
              item: {
                name: "item",
                type: "sap.ui.core.Item",
                description: "The selected Item"
              },
              key: {
                name: "key",
                type: "string",
                description:
                  "The key of the selected Item (or null if there is no key)"
              }
            },
            methods: [
              "attachPaneBarItemSelected",
              "detachPaneBarItemSelected",
              "firePaneBarItemSelected"
            ]
          },
          {
            name: "logout",
            visibility: "public",
            description: 'Fired when the user clicks the "Log-off" button',
            methods: ["attachLogout", "detachLogout", "fireLogout"]
          },
          {
            name: "search",
            visibility: "public",
            description: "Fired when search has been triggered.",
            methods: ["attachSearch", "detachSearch", "fireSearch"]
          },
          {
            name: "feedSubmit",
            visibility: "public",
            description: "Fired when a new feed entry is submitted.",
            methods: ["attachFeedSubmit", "detachFeedSubmit", "fireFeedSubmit"]
          },
          {
            name: "paneClosed",
            visibility: "public",
            since: "1.12.0",
            description:
              "Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description:
                  "The id of the PaneBarItem to which the closed pane belonged."
              }
            },
            methods: ["attachPaneClosed", "detachPaneClosed", "firePaneClosed"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Shell.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "feedSubmit",
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
                  optional: false
                }
              }
            }
          ],
          description: "Fired when a new feed entry is submitted."
        },
        {
          name: "logout",
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
                  optional: false
                }
              }
            }
          ],
          description: 'Fired when the user clicks the "Log-off" button'
        },
        {
          name: "paneBarItemSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "The ID of the selected PaneBarItem."
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.core.Item",
                      optional: false,
                      description: "The selected Item"
                    },
                    key: {
                      name: "key",
                      type: "string",
                      optional: false,
                      description:
                        "The key of the selected Item (or null if there is no key)"
                    }
                  }
                }
              }
            }
          ],
          description:
            "An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements."
        },
        {
          name: "paneClosed",
          visibility: "public",
          since: "1.12.0",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description:
                        "The id of the PaneBarItem to which the closed pane belonged."
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before."
        },
        {
          name: "search",
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
                  optional: false
                }
              }
            }
          ],
          description: "Fired when search has been triggered."
        },
        {
          name: "worksetItemSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description:
                        "The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given."
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.ux3.NavigationItem",
                      optional: false,
                      description: "The selected NavigationItem"
                    },
                    key: {
                      name: "key",
                      type: "string",
                      optional: false,
                      description:
                        "The key of the selected NavigationItem (or null if there is no key)"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected."
        }
      ],
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "addHeaderItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderItem",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The headerItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some headerItem to the aggregation {@link #getHeaderItems headerItems}."
        },
        {
          name: "addPaneBarItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPaneBarItem",
              type: "sap.ui.core.Item",
              optional: false,
              description:
                "The paneBarItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some paneBarItem to the aggregation {@link #getPaneBarItems paneBarItems}."
        },
        {
          name: "addPaneContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPaneContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The paneContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some paneContent to the aggregation {@link #getPaneContent paneContent}."
        },
        {
          name: "addToolPopup",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolPopup",
              type: "sap.ui.ux3.ToolPopup",
              optional: false,
              description: "The toolPopup to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some toolPopup to the aggregation {@link #getToolPopups toolPopups}."
        },
        {
          name: "addWorksetItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oWorksetItem",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "The worksetItem to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some worksetItem to the aggregation {@link #getWorksetItems worksetItems}."
        },
        {
          name: "attachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.Shell</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.\n\nFired when a new feed entry is submitted."
        },
        {
          name: "attachLogout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself"
            }
          ],
          description:
            'Attaches event handler <code>fnFunction</code> to the {@link #event:logout logout} event of this <code>sap.ui.ux3.Shell</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.\n\nFired when the user clicks the "Log-off" button'
        },
        {
          name: "attachPaneBarItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:paneBarItemSelected paneBarItemSelected} event of this <code>sap.ui.ux3.Shell</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.\n\nAn item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements."
        },
        {
          name: "attachPaneClosed",
          visibility: "public",
          since: "1.12.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:paneClosed paneClosed} event of this <code>sap.ui.ux3.Shell</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.\n\nFired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before."
        },
        {
          name: "attachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.Shell</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.\n\nFired when search has been triggered."
        },
        {
          name: "attachWorksetItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:worksetItemSelected worksetItemSelected} event of this <code>sap.ui.ux3.Shell</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.\n\nFired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected."
        },
        {
          name: "closePane",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.ux3.Shell"
          },
          description:
            "Closes the side Pane (if open).\n\nReturns 'this' to allow method chaining."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyHeaderItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the headerItems in the aggregation {@link #getHeaderItems headerItems}."
        },
        {
          name: "destroyNotificationBar",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the notificationBar in the aggregation {@link #getNotificationBar notificationBar}."
        },
        {
          name: "destroyPaneBarItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the paneBarItems in the aggregation {@link #getPaneBarItems paneBarItems}."
        },
        {
          name: "destroyPaneContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}."
        },
        {
          name: "destroyToolPopups",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the toolPopups in the aggregation {@link #getToolPopups toolPopups}."
        },
        {
          name: "destroyWorksetItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the worksetItems in the aggregation {@link #getWorksetItems worksetItems}."
        },
        {
          name: "detachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.Shell</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachLogout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:logout logout} event of this <code>sap.ui.ux3.Shell</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachPaneBarItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:paneBarItemSelected paneBarItemSelected} event of this <code>sap.ui.ux3.Shell</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachPaneClosed",
          visibility: "public",
          since: "1.12.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:paneClosed paneClosed} event of this <code>sap.ui.ux3.Shell</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSearch",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.Shell</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachWorksetItemSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:worksetItemSelected worksetItemSelected} event of this <code>sap.ui.ux3.Shell</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.Shell with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireFeedSubmit",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:feedSubmit feedSubmit} to attached listeners."
        },
        {
          name: "fireLogout",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:logout logout} to attached listeners."
        },
        {
          name: "firePaneBarItemSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "The ID of the selected PaneBarItem."
                },
                item: {
                  name: "item",
                  type: "sap.ui.core.Item",
                  optional: true,
                  description: "The selected Item"
                },
                key: {
                  name: "key",
                  type: "string",
                  optional: true,
                  description:
                    "The key of the selected Item (or null if there is no key)"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:paneBarItemSelected paneBarItemSelected} to attached listeners."
        },
        {
          name: "firePaneClosed",
          visibility: "protected",
          since: "1.12.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description:
                    "The id of the PaneBarItem to which the closed pane belonged."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:paneClosed paneClosed} to attached listeners."
        },
        {
          name: "fireSearch",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:search search} to attached listeners."
        },
        {
          name: "fireWorksetItemSelected",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description:
                    "The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given."
                },
                item: {
                  name: "item",
                  type: "sap.ui.ux3.NavigationItem",
                  optional: true,
                  description: "The selected NavigationItem"
                },
                key: {
                  name: "key",
                  type: "string",
                  optional: true,
                  description:
                    "The key of the selected NavigationItem (or null if there is no key)"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:worksetItemSelected worksetItemSelected} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getAllowOverlayHeaderAccess",
          visibility: "public",
          since: "1.14.0",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>allowOverlayHeaderAccess</code>"
          },
          description:
            "Gets current value of property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.\n\nWhether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getAppIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>appIcon</code>"
          },
          description:
            "Gets current value of property {@link #getAppIcon appIcon}.\n\nThe URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be set."
        },
        {
          name: "getAppIconTooltip",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>appIconTooltip</code>"
          },
          description:
            "Gets current value of property {@link #getAppIconTooltip appIconTooltip}.\n\nThe tooltip of the application icon in the header"
        },
        {
          name: "getApplyContentPadding",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>applyContentPadding</code>"
          },
          description:
            "Gets current value of property {@link #getApplyContentPadding applyContentPadding}.\n\nWhether the Shell content area should have a theme-dependent padding or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getAppTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>appTitle</code>"
          },
          description:
            "Gets current value of property {@link #getAppTitle appTitle}.\n\nThe application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell."
        },
        {
          name: "getDesignType",
          visibility: "public",
          since: "1.12.0",
          returnValue: {
            type: "sap.ui.ux3.ShellDesignType",
            description: "Value of property <code>designType</code>"
          },
          description:
            "Gets current value of property {@link #getDesignType designType}.\n\nDefines which design type is to be used.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "getFullHeightContent",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>fullHeightContent</code>"
          },
          description:
            'Gets current value of property {@link #getFullHeightContent fullHeightContent}.\n\nIf set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.\n\nDefault value is <code>false</code>.'
        },
        {
          name: "getHeaderItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getHeaderItems headerItems}.\n\nControls to appear in the header next to the logout button. It is recommended to only use controls of type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level."
        },
        {
          name: "getHeaderType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ShellHeaderType",
            description: "Value of property <code>headerType</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderType headerType}.\n\nDefines which header type to be used. Depending on the header type some other functionality might be obsolete.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "getLogoutButtonTooltip",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "string",
            description: "Value of property <code>logoutButtonTooltip</code>"
          },
          description:
            'Gets current value of property {@link #getLogoutButtonTooltip logoutButtonTooltip}.\n\nThe tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.'
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.ux3.Shell."
        },
        {
          name: "getNotificationBar",
          visibility: "public",
          since: "1.7.0",
          returnValue: {
            type: "sap.ui.ux3.NotificationBar"
          },
          description:
            "Gets content of aggregation {@link #getNotificationBar notificationBar}.\n\nThe NotificationBar which should be integrated into the Shell."
        },
        {
          name: "getPaneBarItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Item[]"
          },
          description:
            "Gets content of aggregation {@link #getPaneBarItems paneBarItems}.\n\nThe items to appear in the PaneBar."
        },
        {
          name: "getPaneContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getPaneContent paneContent}.\n\nThe content to appear in the pane area."
        },
        {
          name: "getPaneWidth",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>paneWidth</code>"
          },
          description:
            "Gets current value of property {@link #getPaneWidth paneWidth}.\n\nThe width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).\n\nDefault value is <code>250</code>."
        },
        {
          name: "getSearchField",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.commons.SearchField"
          },
          description:
            "Returns the SearchField control which is used in the Search Tool."
        },
        {
          name: "getSelectedWorksetItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedWorksetItem selectedWorksetItem}, or <code>null</code>."
        },
        {
          name: "getShowFeederTool",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFeederTool</code>"
          },
          description:
            'Gets current value of property {@link #getShowFeederTool showFeederTool}.\n\nWhether the "Feeder" tool should be displayed or not.\n\nDefault value is <code>true</code>.'
        },
        {
          name: "getShowInspectorTool",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showInspectorTool</code>"
          },
          description:
            'Gets current value of property {@link #getShowInspectorTool showInspectorTool}.\n\nWhether the "Inspector" tool should be displayed or not.\n\nDefault value is <code>false</code>.',
          deprecated: {
            since: "1.7.2",
            text:
              "According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger it from the respective elements in the Shell content."
          }
        },
        {
          name: "getShowLogoutButton",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showLogoutButton</code>"
          },
          description:
            "Gets current value of property {@link #getShowLogoutButton showLogoutButton}.\n\nWhether the Logoff button in the header should be displayed or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowPane",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showPane</code>"
          },
          description:
            "Gets current value of property {@link #getShowPane showPane}.\n\nWhether the pane bar should be displayed at all or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowSearchTool",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSearchTool</code>"
          },
          description:
            'Gets current value of property {@link #getShowSearchTool showSearchTool}.\n\nWhether the "Global Search" tool should be displayed or not.\n\nDefault value is <code>true</code>.'
        },
        {
          name: "getShowTools",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showTools</code>"
          },
          description:
            "Gets current value of property {@link #getShowTools showTools}.\n\nWhether the tool area should be displayed at all or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getToolPopups",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup[]"
          },
          description:
            "Gets content of aggregation {@link #getToolPopups toolPopups}.\n\nThe items which appear in the ToolPalette and are opened as popup when clicked."
        },
        {
          name: "getWorksetItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]"
          },
          description:
            "Gets content of aggregation {@link #getWorksetItems worksetItems}.\n\nThe workset items."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfHeaderItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oHeaderItem",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The headerItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getHeaderItems headerItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfPaneBarItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oPaneBarItem",
              type: "sap.ui.core.Item",
              optional: false,
              description: "The paneBarItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Item</code> in the aggregation {@link #getPaneBarItems paneBarItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfPaneContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oPaneContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The paneContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getPaneContent paneContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfToolPopup",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oToolPopup",
              type: "sap.ui.ux3.ToolPopup",
              optional: false,
              description: "The toolPopup whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ToolPopup</code> in the aggregation {@link #getToolPopups toolPopups}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfWorksetItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oWorksetItem",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The worksetItem whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getWorksetItems worksetItems}. and returns its index if found or -1 otherwise."
        },
        {
          name: "initializePersonalization",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "oSettings",
              type: "object",
              optional: false,
              description: "Personalization settings object"
            }
          ],
          description:
            "Experimental method! Do not use!\n\nMakes Shell personalization available and injects the given personalization settings. This should be called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise it may override the user's new settings."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "insertHeaderItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderItem",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The headerItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the headerItem should be inserted at; for a negative value of <code>iIndex</code>, the headerItem is inserted at position 0; for a value greater than the current size of the aggregation, the headerItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a headerItem into the aggregation {@link #getHeaderItems headerItems}."
        },
        {
          name: "insertPaneBarItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPaneBarItem",
              type: "sap.ui.core.Item",
              optional: false,
              description:
                "The paneBarItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the paneBarItem should be inserted at; for a negative value of <code>iIndex</code>, the paneBarItem is inserted at position 0; for a value greater than the current size of the aggregation, the paneBarItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a paneBarItem into the aggregation {@link #getPaneBarItems paneBarItems}."
        },
        {
          name: "insertPaneContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPaneContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The paneContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the paneContent should be inserted at; for a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value greater than the current size of the aggregation, the paneContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}."
        },
        {
          name: "insertToolPopup",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolPopup",
              type: "sap.ui.ux3.ToolPopup",
              optional: false,
              description:
                "The toolPopup to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the toolPopup should be inserted at; for a negative value of <code>iIndex</code>, the toolPopup is inserted at position 0; for a value greater than the current size of the aggregation, the toolPopup is inserted at the last position"
            }
          ],
          description:
            "Inserts a toolPopup into the aggregation {@link #getToolPopups toolPopups}."
        },
        {
          name: "insertWorksetItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oWorksetItem",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "The worksetItem to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the worksetItem should be inserted at; for a negative value of <code>iIndex</code>, the worksetItem is inserted at position 0; for a value greater than the current size of the aggregation, the worksetItem is inserted at the last position"
            }
          ],
          description:
            "Inserts a worksetItem into the aggregation {@link #getWorksetItems worksetItems}."
        },
        {
          name: "isPaneOpen",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description: "Returns 'true' if the side Pane is currently open."
        },
        {
          name: "openPane",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.ux3.Shell"
          },
          parameters: [
            {
              name: "sPaneBarItemId",
              type: "string",
              optional: false,
              description:
                "The ID of the PaneBarItem which should be marked as selected."
            }
          ],
          description:
            "Opens the side Pane.\n\nA valid ID of a paneBarItem must be given, so this item can be marked as selected. A \"paneBarItemSelected\" event is then fired as if the opening was triggered by the user by a click on the respective PaneBarItem. This method can be called (with different IDs) even when the Pane is already open. It has then the same effect as if the user switches between PaneBarItems.\n\nReturns 'this' to allow method chaining."
        },
        {
          name: "openPersonalizationDialog",
          visibility: "public",
          "ui5-metamodel": true,
          description: "Experimental method! Do not use!"
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllHeaderItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getHeaderItems headerItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllPaneBarItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Item[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getPaneBarItems paneBarItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllPaneContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getPaneContent paneContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllToolPopups",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getToolPopups toolPopups}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllWorksetItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getWorksetItems worksetItems}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "removeHeaderItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed headerItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vHeaderItem",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The headerItem to remove or its index or id"
            }
          ],
          description:
            "Removes a headerItem from the aggregation {@link #getHeaderItems headerItems}."
        },
        {
          name: "removePaneBarItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Item",
            description: "The removed paneBarItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vPaneBarItem",
              type: "int|string|sap.ui.core.Item",
              optional: false,
              description: "The paneBarItem to remove or its index or id"
            }
          ],
          description:
            "Removes a paneBarItem from the aggregation {@link #getPaneBarItems paneBarItems}."
        },
        {
          name: "removePaneContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed paneContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vPaneContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The paneContent to remove or its index or id"
            }
          ],
          description:
            "Removes a paneContent from the aggregation {@link #getPaneContent paneContent}."
        },
        {
          name: "removeToolPopup",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description: "The removed toolPopup or <code>null</code>"
          },
          parameters: [
            {
              name: "vToolPopup",
              type: "int|string|sap.ui.ux3.ToolPopup",
              optional: false,
              description: "The toolPopup to remove or its index or id"
            }
          ],
          description:
            "Removes a toolPopup from the aggregation {@link #getToolPopups toolPopups}."
        },
        {
          name: "removeWorksetItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description: "The removed worksetItem or <code>null</code>"
          },
          parameters: [
            {
              name: "vWorksetItem",
              type: "int|string|sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The worksetItem to remove or its index or id"
            }
          ],
          description:
            "Removes a worksetItem from the aggregation {@link #getWorksetItems worksetItems}."
        },
        {
          name: "setAllowOverlayHeaderAccess",
          visibility: "public",
          since: "1.14.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAllowOverlayHeaderAccess",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>allowOverlayHeaderAccess</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.\n\nWhether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setAppIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sAppIcon",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>appIcon</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAppIcon appIcon}.\n\nThe URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setAppIconTooltip",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sAppIconTooltip",
              type: "string",
              optional: false,
              description: "New value for property <code>appIconTooltip</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAppIconTooltip appIconTooltip}.\n\nThe tooltip of the application icon in the header\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setApplyContentPadding",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bApplyContentPadding",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>applyContentPadding</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.\n\nWhether the Shell content area should have a theme-dependent padding or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setAppTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sAppTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>appTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAppTitle appTitle}.\n\nThe application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setContent",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The new Content. In this method it must be exactly one control (-tree). Use addContent() to add more control (-trees) to the main content area of the Shell."
            },
            {
              name: "bDestroyOldContent",
              type: "boolean",
              optional: false,
              description:
                "If set, the controls previously contained in the Shell will be destroyed, to avoid memory leaks."
            }
          ],
          description:
            'Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the content area (not the complete Shell). This method may be more convenient than a series of calls to "removeContent" and "addContent", which each lead to a re-rendering of the content area (but again not of the complete Shell).\n\nBy default the old content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.'
        },
        {
          name: "setDesignType",
          visibility: "public",
          since: "1.12.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDesignType",
              type: "sap.ui.ux3.ShellDesignType",
              optional: false,
              description: "New value for property <code>designType</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDesignType designType}.\n\nDefines which design type is to be used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "setFullHeightContent",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFullHeightContent",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>fullHeightContent</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getFullHeightContent fullHeightContent}.\n\nIf set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.'
        },
        {
          name: "setHeaderType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderType",
              type: "sap.ui.ux3.ShellHeaderType",
              optional: false,
              description: "New value for property <code>headerType</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderType headerType}.\n\nDefines which header type to be used. Depending on the header type some other functionality might be obsolete.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "setLogoutButtonTooltip",
          visibility: "public",
          since: "1.9.0",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sLogoutButtonTooltip",
              type: "string",
              optional: false,
              description:
                "New value for property <code>logoutButtonTooltip</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getLogoutButtonTooltip logoutButtonTooltip}.\n\nThe tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.'
        },
        {
          name: "setOffsetRight",
          visibility: "protected",
          since: "1.7.0",
          parameters: [
            {
              name: "px",
              type: "int",
              optional: false,
              description:
                "how many pixels of free space should be next to the Shell (between 0 and 600)"
            },
            {
              name: "complete",
              type: "function",
              optional: true,
              description:
                "optional callback function to call after the animation"
            },
            {
              name: "outerId",
              type: "string",
              optional: true,
              description:
                "optional id of the content representing the outside sidebar. If specified the width of the content is animated."
            }
          ],
          description:
            "Moves the complete Shell away from the right window border by the given number of pixels (left border in RTL case).\n\nSo there is space for a sidebar or so outside the Shell. The CSS class 'sapUiUx3ShellOuterSideBar' provides the basic position capabilities for the sidebar DOM element.\n\nThis feature is not public. The usage is only granted to special groups on request."
        },
        {
          name: "setPaneContent",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The new Pane content. In this method it must be exactly one control (-tree). This could likely be a layout or a specific ux3 Pane control. Use addPaneContent() to add more control (-trees) to the Pane."
            },
            {
              name: "bDestroyOldContent",
              type: "boolean",
              optional: false,
              description:
                "If set, the controls previously contained in the pane will be destroyed, to avoid memory leaks."
            }
          ],
          description:
            'Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only re-render the pane content (and not the shell) which is faster and smoother than any other way of changing the "paneContent" aggregation.\n\nBy default, the old pane content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.'
        },
        {
          name: "setPaneWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iPaneWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>paneWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPaneWidth paneWidth}.\n\nThe width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>250</code>."
        },
        {
          name: "setSelectedWorksetItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedWorksetItem",
              type: "sap.ui.core.ID|sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedWorksetItem association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedWorksetItem selectedWorksetItem}."
        },
        {
          name: "setShowFeederTool",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFeederTool",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showFeederTool</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getShowFeederTool showFeederTool}.\n\nWhether the "Feeder" tool should be displayed or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.'
        },
        {
          name: "setShowInspectorTool",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowInspectorTool",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showInspectorTool</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getShowInspectorTool showInspectorTool}.\n\nWhether the "Inspector" tool should be displayed or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.',
          deprecated: {
            since: "1.7.2",
            text:
              "According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger it from the respective elements in the Shell content."
          }
        },
        {
          name: "setShowLogoutButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowLogoutButton",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showLogoutButton</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowLogoutButton showLogoutButton}.\n\nWhether the Logoff button in the header should be displayed or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowPane",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowPane",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showPane</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowPane showPane}.\n\nWhether the pane bar should be displayed at all or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowSearchTool",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSearchTool",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showSearchTool</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getShowSearchTool showSearchTool}.\n\nWhether the "Global Search" tool should be displayed or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.'
        },
        {
          name: "setShowTools",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.Shell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowTools",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showTools</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowTools showTools}.\n\nWhether the tool area should be displayed at all or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.ShellDesignType",
      basename: "ShellDesignType",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "ShellDesignType",
      static: true,
      visibility: "public",
      since: "1.12.0",
      description: "Available shell design types.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Crystal",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "An even lighter design. It borrows most of its properties from the Light design and just changes a few details like the header colors in order to have a blue design within gold reflection."
        },
        {
          name: "Light",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "A lighter design. Should be used in combination with the Standard header type."
        },
        {
          name: "Standard",
          visibility: "public",
          static: true,
          type: "string",
          description: "The standard Shell design (dark)."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.ShellHeaderType",
      basename: "ShellHeaderType",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "ShellHeaderType",
      static: true,
      visibility: "public",
      description: "Available shell header display types.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "BrandOnly",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Only the branding area is visible. Top-level navigation bar, header items, title and icon are not shown."
        },
        {
          name: "NoNavigation",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Like the Standard Area but without top-level navigation bar."
        },
        {
          name: "SlimNavigation",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Like the Standard Area but with a leaner top-level navigation bar."
        },
        {
          name: "Standard",
          visibility: "public",
          static: true,
          type: "string",
          description: "The standard Shell header."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ThingAction",
      basename: "ThingAction",
      resource: "sap/ui/ux3/ThingAction.js",
      module: "sap/ui/ux3/ThingAction",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description: "Thing Action for Swatch, QuickView, Thinginspector",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "text of action",
            methods: ["getText", "setText"]
          },
          {
            name: "enabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "action enabled (true/false)",
            methods: ["getEnabled", "setEnabled"]
          }
        ],
        events: [
          {
            name: "select",
            visibility: "public",
            description: "Event will be fired when the action was triggered.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of selected action"
              },
              action: {
                name: "action",
                type: "sap.ui.ux3.ThingAction",
                description: "Selected Thing Action"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ThingAction.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "Id of selected action"
                    },
                    action: {
                      name: "action",
                      type: "sap.ui.ux3.ThingAction",
                      optional: false,
                      description: "Selected Thing Action"
                    }
                  }
                }
              }
            }
          ],
          description: "Event will be fired when the action was triggered."
        }
      ],
      methods: [
        {
          name: "attachSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingAction</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.ux3.ThingAction</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ThingAction</code> itself.\n\nEvent will be fired when the action was triggered."
        },
        {
          name: "detachSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.ux3.ThingAction</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ThingAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "fireSelect",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of selected action"
                },
                action: {
                  name: "action",
                  type: "sap.ui.ux3.ThingAction",
                  optional: true,
                  description: "Selected Thing Action"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:select select} to attached listeners."
        },
        {
          name: "getEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enabled</code>"
          },
          description:
            "Gets current value of property {@link #getEnabled enabled}.\n\naction enabled (true/false)\n\nDefault value is <code>true</code>."
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
            "Returns a metadata object for class sap.ui.ux3.ThingAction."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\ntext of action"
        },
        {
          name: "setEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnabled",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnabled enabled}.\n\naction enabled (true/false)\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
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
            "Sets a new value for property {@link #getText text}.\n\ntext of action\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ThingGroup",
      basename: "ThingGroup",
      resource: "sap/ui/ux3/ThingGroup.js",
      module: "sap/ui/ux3/ThingGroup",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description: "Thing Group Area",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Title of Group",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "colspan",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If Group is used in a column layout the groups spans the all columns if set to true.",
            methods: ["getColspan", "setColspan"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Content of Group",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "actions",
            singularName: "action",
            type: "sap.ui.ux3.ThingGroup",
            cardinality: "0..n",
            visibility: "public",
            description: "Actions of the groups content",
            methods: [
              "getActions",
              "destroyActions",
              "insertAction",
              "addAction",
              "removeAction",
              "indexOfAction",
              "removeAllActions"
            ]
          }
        ],
        defaultAggregation: "content"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ThingGroup.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The action to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some action to the aggregation {@link #getActions actions}."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actions in the aggregation {@link #getActions actions}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
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
            "Creates a new subclass of class sap.ui.ux3.ThingGroup with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]"
          },
          description:
            "Gets content of aggregation {@link #getActions actions}.\n\nActions of the groups content"
        },
        {
          name: "getColspan",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>colspan</code>"
          },
          description:
            "Gets current value of property {@link #getColspan colspan}.\n\nIf Group is used in a column layout the groups spans the all columns if set to true.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nContent of Group"
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
            "Returns a metadata object for class sap.ui.ux3.ThingGroup."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nTitle of Group"
        },
        {
          name: "indexOfAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The action whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The action to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position"
            }
          ],
          description:
            "Inserts a action into the aggregation {@link #getActions actions}."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description: "The removed action or <code>null</code>"
          },
          parameters: [
            {
              name: "vAction",
              type: "int|string|sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The action to remove or its index or id"
            }
          ],
          description:
            "Removes a action from the aggregation {@link #getActions actions}."
        },
        {
          name: "removeAllActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getActions actions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setColspan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bColspan",
              type: "boolean",
              optional: false,
              description: "New value for property <code>colspan</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColspan colspan}.\n\nIf Group is used in a column layout the groups spans the all columns if set to true.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nTitle of Group\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ThingInspector",
      basename: "ThingInspector",
      resource: "sap/ui/ux3/ThingInspector.js",
      module: "sap/ui/ux3/ThingInspector",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.ux3.Overlay",
      description: "Thing Inspector",
      deprecated: {
        since: "1.38",
        text: "There is not an exact replacement."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "firstTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "First Line of the Thing Inspector Title",
            methods: ["getFirstTitle", "setFirstTitle"]
          },
          {
            name: "type",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Thing type",
            methods: ["getType", "setType"]
          },
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Thing Icon Url",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "secondTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Second Line of the Thing Inspector Title",
            methods: ["getSecondTitle", "setSecondTitle"]
          },
          {
            name: "followState",
            type: "sap.ui.ux3.FollowActionState",
            defaultValue: "Default",
            group: "Misc",
            visibility: "public",
            description: "Follow State of a Thing",
            methods: ["getFollowState", "setFollowState"]
          },
          {
            name: "flagState",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "State of Flag Action",
            methods: ["getFlagState", "setFlagState"]
          },
          {
            name: "favoriteState",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "State Of favorite Action",
            methods: ["getFavoriteState", "setFavoriteState"]
          },
          {
            name: "favoriteActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Favorite action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getFavoriteActionEnabled", "setFavoriteActionEnabled"]
          },
          {
            name: "updateActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Update action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getUpdateActionEnabled", "setUpdateActionEnabled"]
          },
          {
            name: "followActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Follow action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getFollowActionEnabled", "setFollowActionEnabled"]
          },
          {
            name: "flagActionEnabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Flag action enabled/disabled. If disabled the action will be invisible.",
            methods: ["getFlagActionEnabled", "setFlagActionEnabled"]
          },
          {
            name: "headerType",
            type: "sap.ui.ux3.ThingViewerHeaderType",
            defaultValue: "Standard",
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description: "Defines which header type should be used.",
            methods: ["getHeaderType", "setHeaderType"]
          }
        ],
        aggregations: [
          {
            name: "actions",
            singularName: "action",
            type: "sap.ui.ux3.ThingAction",
            cardinality: "0..n",
            visibility: "public",
            description: "Actions of a Thing",
            methods: [
              "getActions",
              "destroyActions",
              "insertAction",
              "addAction",
              "removeAction",
              "indexOfAction",
              "removeAllActions"
            ]
          },
          {
            name: "headerContent",
            singularName: "headerContent",
            type: "sap.ui.ux3.ThingGroup",
            cardinality: "0..n",
            visibility: "public",
            description: "ThingGroups for the header content",
            methods: [
              "getHeaderContent",
              "destroyHeaderContent",
              "insertHeaderContent",
              "addHeaderContent",
              "removeHeaderContent",
              "indexOfHeaderContent",
              "removeAllHeaderContent"
            ]
          },
          {
            name: "facets",
            singularName: "facet",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..n",
            visibility: "public",
            description: "Thing Inspector facets",
            methods: [
              "getFacets",
              "destroyFacets",
              "insertFacet",
              "addFacet",
              "removeFacet",
              "indexOfFacet",
              "removeAllFacets"
            ]
          },
          {
            name: "facetContent",
            singularName: "facetContent",
            type: "sap.ui.ux3.ThingGroup",
            cardinality: "0..n",
            visibility: "public",
            description: "ThingGroups for content of the selected facet",
            methods: [
              "getFacetContent",
              "destroyFacetContent",
              "insertFacetContent",
              "addFacetContent",
              "removeFacetContent",
              "indexOfFacetContent",
              "removeAllFacetContent"
            ]
          },
          {
            name: "actionBar",
            singularName: "actionBar",
            type: "sap.ui.ux3.ActionBar",
            cardinality: "0..1",
            visibility: "public",
            description:
              "ActionBar. If no actionBar is set a default ActionBar will be created.",
            methods: ["getActionBar", "destroyActionBar", "setActionBar"]
          },
          {
            name: "thingViewer",
            singularName: "thingViewer",
            type: "sap.ui.ux3.ThingViewer",
            cardinality: "0..1",
            visibility: "hidden",
            description: "The ThingViewer managed by this ThingInspector",
            methods: ["getThingViewer", "destroyThingViewer", "setThingViewer"]
          }
        ],
        associations: [
          {
            name: "selectedFacet",
            singularName: "selectedFacet",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..1",
            visibility: "public",
            description: "The Facet that is currently selected.",
            methods: ["getSelectedFacet", "setSelectedFacet"]
          }
        ],
        events: [
          {
            name: "actionSelected",
            visibility: "public",
            description: "Further thing related Action selected",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of selected ThingAction"
              },
              action: {
                name: "action",
                type: "sap.ui.ux3.ThingAction",
                description: "Selected ThingAction"
              }
            },
            methods: [
              "attachActionSelected",
              "detachActionSelected",
              "fireActionSelected"
            ]
          },
          {
            name: "facetSelected",
            visibility: "public",
            description:
              "Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of selected NavigationItem"
              },
              item: {
                name: "item",
                type: "sap.ui.ux3.NavigationItem",
                description: "The selected NavigationItem"
              },
              key: {
                name: "key",
                type: "string",
                description: "Key of selected NavigationItem"
              }
            },
            methods: [
              "attachFacetSelected",
              "detachFacetSelected",
              "fireFacetSelected"
            ]
          },
          {
            name: "feedSubmit",
            visibility: "public",
            description: "Fired when a new feed entry is submitted.",
            parameters: {
              text: {
                name: "text",
                type: "string",
                description: "Feed text"
              }
            },
            methods: ["attachFeedSubmit", "detachFeedSubmit", "fireFeedSubmit"]
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ThingInspector.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "actionSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "Id of selected ThingAction"
                    },
                    action: {
                      name: "action",
                      type: "sap.ui.ux3.ThingAction",
                      optional: false,
                      description: "Selected ThingAction"
                    }
                  }
                }
              }
            }
          ],
          description: "Further thing related Action selected"
        },
        {
          name: "facetSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "Id of selected NavigationItem"
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.ux3.NavigationItem",
                      optional: false,
                      description: "The selected NavigationItem"
                    },
                    key: {
                      name: "key",
                      type: "string",
                      optional: false,
                      description: "Key of selected NavigationItem"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected."
        },
        {
          name: "feedSubmit",
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
                    text: {
                      name: "text",
                      type: "string",
                      optional: false,
                      description: "Feed text"
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when a new feed entry is submitted."
        }
      ],
      methods: [
        {
          name: "addAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some action to the aggregation {@link #getActions actions}."
        },
        {
          name: "addFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacet",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some facet to the aggregation {@link #getFacets facets}."
        },
        {
          name: "addFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacetContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The facetContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some facetContent to the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "addHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The headerContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "attachActionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ThingInspector</code> itself.\n\nFurther thing related Action selected"
        },
        {
          name: "attachFacetSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ThingInspector</code> itself.\n\nEvent for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected."
        },
        {
          name: "attachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ThingInspector</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ThingInspector</code> itself.\n\nFired when a new feed entry is submitted."
        },
        {
          name: "destroyActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the actionBar in the aggregation {@link #getActionBar actionBar}."
        },
        {
          name: "destroyActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actions in the aggregation {@link #getActions actions}."
        },
        {
          name: "destroyFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "destroyFacets",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the facets in the aggregation {@link #getFacets facets}."
        },
        {
          name: "destroyHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "detachActionSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFacetSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFeedSubmit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ThingInspector</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ThingInspector with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}."
        },
        {
          name: "fireActionSelected",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of selected ThingAction"
                },
                action: {
                  name: "action",
                  type: "sap.ui.ux3.ThingAction",
                  optional: true,
                  description: "Selected ThingAction"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:actionSelected actionSelected} to attached listeners."
        },
        {
          name: "fireFacetSelected",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of selected NavigationItem"
                },
                item: {
                  name: "item",
                  type: "sap.ui.ux3.NavigationItem",
                  optional: true,
                  description: "The selected NavigationItem"
                },
                key: {
                  name: "key",
                  type: "string",
                  optional: true,
                  description: "Key of selected NavigationItem"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:facetSelected facetSelected} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireFeedSubmit",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                text: {
                  name: "text",
                  type: "string",
                  optional: true,
                  description: "Feed text"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:feedSubmit feedSubmit} to attached listeners."
        },
        {
          name: "getActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar"
          },
          description:
            "Gets content of aggregation {@link #getActionBar actionBar}.\n\nActionBar. If no actionBar is set a default ActionBar will be created."
        },
        {
          name: "getActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction[]"
          },
          description:
            "Gets content of aggregation {@link #getActions actions}.\n\nActions of a Thing"
        },
        {
          name: "getFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]"
          },
          description:
            "Gets content of aggregation {@link #getFacetContent facetContent}.\n\nThingGroups for content of the selected facet"
        },
        {
          name: "getFacets",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]"
          },
          description:
            "Gets content of aggregation {@link #getFacets facets}.\n\nThing Inspector facets"
        },
        {
          name: "getFavoriteActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>favoriteActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.\n\nFavorite action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFavoriteState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>favoriteState</code>"
          },
          description:
            "Gets current value of property {@link #getFavoriteState favoriteState}.\n\nState Of favorite Action\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFirstTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>firstTitle</code>"
          },
          description:
            "Gets current value of property {@link #getFirstTitle firstTitle}.\n\nFirst Line of the Thing Inspector Title"
        },
        {
          name: "getFlagActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flagActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.\n\nFlag action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFlagState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flagState</code>"
          },
          description:
            "Gets current value of property {@link #getFlagState flagState}.\n\nState of Flag Action\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFollowActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>followActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.\n\nFollow action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFollowState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.FollowActionState",
            description: "Value of property <code>followState</code>"
          },
          description:
            "Gets current value of property {@link #getFollowState followState}.\n\nFollow State of a Thing\n\nDefault value is <code>Default</code>."
        },
        {
          name: "getHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]"
          },
          description:
            "Gets content of aggregation {@link #getHeaderContent headerContent}.\n\nThingGroups for the header content"
        },
        {
          name: "getHeaderType",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.ux3.ThingViewerHeaderType",
            description: "Value of property <code>headerType</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderType headerType}.\n\nDefines which header type should be used.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nThing Icon Url"
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
            "Returns a metadata object for class sap.ui.ux3.ThingInspector."
        },
        {
          name: "getSecondTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>secondTitle</code>"
          },
          description:
            "Gets current value of property {@link #getSecondTitle secondTitle}.\n\nSecond Line of the Thing Inspector Title"
        },
        {
          name: "getSelectedFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet}, or <code>null</code>."
        },
        {
          name: "getType",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>type</code>"
          },
          description:
            "Gets current value of property {@link #getType type}.\n\nThing type"
        },
        {
          name: "getUpdateActionEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>updateActionEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.\n\nUpdate action enabled/disabled. If disabled the action will be invisible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfFacet",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFacet",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getFacets facets}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfFacetContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFacetContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The facetContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getFacetContent facetContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfHeaderContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The headerContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getHeaderContent headerContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position"
            }
          ],
          description:
            "Inserts a action into the aggregation {@link #getActions actions}."
        },
        {
          name: "insertFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacet",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the facet should be inserted at; for a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value greater than the current size of the aggregation, the facet is inserted at the last position"
            }
          ],
          description:
            "Inserts a facet into the aggregation {@link #getFacets facets}."
        },
        {
          name: "insertFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacetContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The facetContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the facetContent should be inserted at; for a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value greater than the current size of the aggregation, the facetContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "insertHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The headerContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the headerContent should be inserted at; for a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "open",
          visibility: "public",
          parameters: [
            {
              name: "initialFocusId",
              type: "string",
              optional: true
            }
          ],
          description: "Opens this instance of ThingIspector"
        },
        {
          name: "removeAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction",
            description: "The removed action or <code>null</code>"
          },
          parameters: [
            {
              name: "vAction",
              type: "int|string|sap.ui.ux3.ThingAction",
              optional: false,
              description: "The action to remove or its index or id"
            }
          ],
          description:
            "Removes a action from the aggregation {@link #getActions actions}."
        },
        {
          name: "removeAllActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingAction[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getActions actions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFacetContent facetContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllFacets",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFacets facets}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description: "The removed facet or <code>null</code>"
          },
          parameters: [
            {
              name: "vFacet",
              type: "int|string|sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet to remove or its index or id"
            }
          ],
          description:
            "Removes a facet from the aggregation {@link #getFacets facets}."
        },
        {
          name: "removeFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description: "The removed facetContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vFacetContent",
              type: "int|string|sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The facetContent to remove or its index or id"
            }
          ],
          description:
            "Removes a facetContent from the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "removeHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description: "The removed headerContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vHeaderContent",
              type: "int|string|sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The headerContent to remove or its index or id"
            }
          ],
          description:
            "Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "setActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oActionBar",
              type: "sap.ui.ux3.ActionBar",
              optional: false,
              description: "The actionBar to set"
            }
          ],
          description: "Sets the aggregated {@link #getActionBar actionBar}."
        },
        {
          name: "setFavoriteActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFavoriteActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>favoriteActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.\n\nFavorite action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFavoriteState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFavoriteState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>favoriteState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFavoriteState favoriteState}.\n\nState Of favorite Action\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFirstTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFirstTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>firstTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFirstTitle firstTitle}.\n\nFirst Line of the Thing Inspector Title\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFlagActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlagActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>flagActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.\n\nFlag action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFlagState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlagState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>flagState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlagState flagState}.\n\nState of Flag Action\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFollowActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFollowActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>followActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.\n\nFollow action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFollowState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFollowState",
              type: "sap.ui.ux3.FollowActionState",
              optional: false,
              description: "New value for property <code>followState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFollowState followState}.\n\nFollow State of a Thing\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Default</code>."
        },
        {
          name: "setHeaderType",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderType",
              type: "sap.ui.ux3.ThingViewerHeaderType",
              optional: false,
              description: "New value for property <code>headerType</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderType headerType}.\n\nDefines which header type should be used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
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
            "Sets a new value for property {@link #getIcon icon}.\n\nThing Icon Url\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSecondTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSecondTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>secondTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSecondTitle secondTitle}.\n\nSecond Line of the Thing Inspector Title\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSelectedFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedFacet",
              type: "sap.ui.core.ID|sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedFacet association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedFacet selectedFacet}."
        },
        {
          name: "setType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sType",
              type: "string",
              optional: false,
              description: "New value for property <code>type</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getType type}.\n\nThing type\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setUpdateActionEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingInspector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpdateActionEnabled",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>updateActionEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.\n\nUpdate action enabled/disabled. If disabled the action will be invisible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ThingViewer",
      basename: "ThingViewer",
      resource: "sap/ui/ux3/ThingViewer.js",
      module: "sap/ui/ux3/ThingViewer",
      export: "",
      static: true,
      visibility: "public",
      since: "1.9.1",
      extends: "sap.ui.core.Control",
      description:
        "ThingViewer: Same as ThingInspector but decoupled from the Overlay and the ActionBar. The control can be added to a Parent container that has a defined width. The ThingViewer fill the whole container. If the parent container has no width defined the control will not work properly.",
      deprecated: {
        since: "1.38",
        text: "There is not an exact replacement."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Title of the Thing Inspector",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "type",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Thing type",
            methods: ["getType", "setType"]
          },
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Thing Icon Url",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "subtitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Subtitle of the Thing Inspector",
            methods: ["getSubtitle", "setSubtitle"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Misc",
            visibility: "public",
            description: "Width of the ThingViewer",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Misc",
            visibility: "public",
            description: "Height of the ThingViewer",
            methods: ["getHeight", "setHeight"]
          },
          {
            name: "headerType",
            type: "sap.ui.ux3.ThingViewerHeaderType",
            defaultValue: "Standard",
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description: "Defines which header type should be used.",
            methods: ["getHeaderType", "setHeaderType"]
          }
        ],
        aggregations: [
          {
            name: "headerContent",
            singularName: "headerContent",
            type: "sap.ui.ux3.ThingGroup",
            cardinality: "0..n",
            visibility: "public",
            description: "ThingGroups for the header content",
            methods: [
              "getHeaderContent",
              "destroyHeaderContent",
              "insertHeaderContent",
              "addHeaderContent",
              "removeHeaderContent",
              "indexOfHeaderContent",
              "removeAllHeaderContent"
            ]
          },
          {
            name: "facets",
            singularName: "facet",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..n",
            visibility: "public",
            description: "Thing Inspector facets",
            methods: [
              "getFacets",
              "destroyFacets",
              "insertFacet",
              "addFacet",
              "removeFacet",
              "indexOfFacet",
              "removeAllFacets"
            ]
          },
          {
            name: "facetContent",
            singularName: "facetContent",
            type: "sap.ui.ux3.ThingGroup",
            cardinality: "0..n",
            visibility: "public",
            description: "ThingGroups for content of the selected facet",
            methods: [
              "getFacetContent",
              "destroyFacetContent",
              "insertFacetContent",
              "addFacetContent",
              "removeFacetContent",
              "indexOfFacetContent",
              "removeAllFacetContent"
            ]
          },
          {
            name: "actionBar",
            singularName: "actionBar",
            type: "sap.ui.ux3.ActionBar",
            cardinality: "0..1",
            visibility: "public",
            description: "An ActionBar can be given",
            methods: ["getActionBar", "destroyActionBar", "setActionBar"]
          },
          {
            name: "navBar",
            singularName: "navBar",
            type: "sap.ui.ux3.NavigationBar",
            cardinality: "0..1",
            visibility: "hidden",
            description: "NavigationBar that is managed by this ThingViewer",
            methods: ["getNavBar", "destroyNavBar", "setNavBar"]
          }
        ],
        associations: [
          {
            name: "selectedFacet",
            singularName: "selectedFacet",
            type: "sap.ui.ux3.NavigationItem",
            cardinality: "0..1",
            visibility: "public",
            description: "The Facet that is currently selected.",
            methods: ["getSelectedFacet", "setSelectedFacet"]
          }
        ],
        events: [
          {
            name: "facetSelected",
            visibility: "public",
            description:
              "Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description: "Id of selected NavigationItem"
              },
              item: {
                name: "item",
                type: "sap.ui.ux3.NavigationItem",
                description: "The selected NavigationItem"
              },
              key: {
                name: "key",
                type: "string",
                description: "Key of selected NavigationItem"
              }
            },
            methods: [
              "attachFacetSelected",
              "detachFacetSelected",
              "fireFacetSelected"
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
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ThingViewer.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "facetSelected",
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
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description: "Id of selected NavigationItem"
                    },
                    item: {
                      name: "item",
                      type: "sap.ui.ux3.NavigationItem",
                      optional: false,
                      description: "The selected NavigationItem"
                    },
                    key: {
                      name: "key",
                      type: "string",
                      optional: false,
                      description: "Key of selected NavigationItem"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected."
        }
      ],
      methods: [
        {
          name: "addFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacet",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some facet to the aggregation {@link #getFacets facets}."
        },
        {
          name: "addFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacetContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The facetContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some facetContent to the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "addHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The headerContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "attachFacetSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingViewer</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingViewer</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ThingViewer</code> itself.\n\nEvent for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected."
        },
        {
          name: "destroyActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the actionBar in the aggregation {@link #getActionBar actionBar}."
        },
        {
          name: "destroyFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "destroyFacets",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the facets in the aggregation {@link #getFacets facets}."
        },
        {
          name: "destroyHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "detachFacetSelected",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingViewer</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ThingViewer with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireFacetSelected",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description: "Id of selected NavigationItem"
                },
                item: {
                  name: "item",
                  type: "sap.ui.ux3.NavigationItem",
                  optional: true,
                  description: "The selected NavigationItem"
                },
                key: {
                  name: "key",
                  type: "string",
                  optional: true,
                  description: "Key of selected NavigationItem"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:facetSelected facetSelected} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ActionBar"
          },
          description:
            "Gets content of aggregation {@link #getActionBar actionBar}.\n\nAn ActionBar can be given"
        },
        {
          name: "getFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]"
          },
          description:
            "Gets content of aggregation {@link #getFacetContent facetContent}.\n\nThingGroups for content of the selected facet"
        },
        {
          name: "getFacets",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]"
          },
          description:
            "Gets content of aggregation {@link #getFacets facets}.\n\nThing Inspector facets"
        },
        {
          name: "getHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]"
          },
          description:
            "Gets content of aggregation {@link #getHeaderContent headerContent}.\n\nThingGroups for the header content"
        },
        {
          name: "getHeaderType",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.ux3.ThingViewerHeaderType",
            description: "Value of property <code>headerType</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderType headerType}.\n\nDefines which header type should be used.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\nHeight of the ThingViewer\n\nDefault value is <code>100%</code>."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nThing Icon Url"
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
            "Returns a metadata object for class sap.ui.ux3.ThingViewer."
        },
        {
          name: "getSelectedFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet}, or <code>null</code>."
        },
        {
          name: "getSubtitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>subtitle</code>"
          },
          description:
            "Gets current value of property {@link #getSubtitle subtitle}.\n\nSubtitle of the Thing Inspector"
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nTitle of the Thing Inspector"
        },
        {
          name: "getType",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>type</code>"
          },
          description:
            "Gets current value of property {@link #getType type}.\n\nThing type"
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the ThingViewer\n\nDefault value is <code>100%</code>."
        },
        {
          name: "indexOfFacet",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFacet",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getFacets facets}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfFacetContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFacetContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The facetContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getFacetContent facetContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfHeaderContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The headerContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getHeaderContent headerContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacet",
              type: "sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the facet should be inserted at; for a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value greater than the current size of the aggregation, the facet is inserted at the last position"
            }
          ],
          description:
            "Inserts a facet into the aggregation {@link #getFacets facets}."
        },
        {
          name: "insertFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFacetContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The facetContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the facetContent should be inserted at; for a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value greater than the current size of the aggregation, the facetContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "insertHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.ux3.ThingGroup",
              optional: false,
              description:
                "The headerContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the headerContent should be inserted at; for a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "removeAllFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFacetContent facetContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllFacets",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFacets facets}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.NavigationItem",
            description: "The removed facet or <code>null</code>"
          },
          parameters: [
            {
              name: "vFacet",
              type: "int|string|sap.ui.ux3.NavigationItem",
              optional: false,
              description: "The facet to remove or its index or id"
            }
          ],
          description:
            "Removes a facet from the aggregation {@link #getFacets facets}."
        },
        {
          name: "removeFacetContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description: "The removed facetContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vFacetContent",
              type: "int|string|sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The facetContent to remove or its index or id"
            }
          ],
          description:
            "Removes a facetContent from the aggregation {@link #getFacetContent facetContent}."
        },
        {
          name: "removeHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingGroup",
            description: "The removed headerContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vHeaderContent",
              type: "int|string|sap.ui.ux3.ThingGroup",
              optional: false,
              description: "The headerContent to remove or its index or id"
            }
          ],
          description:
            "Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "setActionBar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oActionBar",
              type: "sap.ui.ux3.ActionBar",
              optional: false,
              description: "The actionBar to set"
            }
          ],
          description: "Sets the aggregated {@link #getActionBar actionBar}."
        },
        {
          name: "setHeaderType",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderType",
              type: "sap.ui.ux3.ThingViewerHeaderType",
              optional: false,
              description: "New value for property <code>headerType</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderType headerType}.\n\nDefines which header type should be used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Standard</code>."
        },
        {
          name: "setHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\nHeight of the ThingViewer\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
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
            "Sets a new value for property {@link #getIcon icon}.\n\nThing Icon Url\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSelectedFacet",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedFacet",
              type: "sap.ui.core.ID|sap.ui.ux3.NavigationItem",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedFacet association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedFacet selectedFacet}."
        },
        {
          name: "setSubtitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSubtitle",
              type: "string",
              optional: false,
              description: "New value for property <code>subtitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSubtitle subtitle}.\n\nSubtitle of the Thing Inspector\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nTitle of the Thing Inspector\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sType",
              type: "string",
              optional: false,
              description: "New value for property <code>type</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getType type}.\n\nThing type\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ThingViewer",
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
            "Sets a new value for property {@link #getWidth width}.\n\nWidth of the ThingViewer\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.ThingViewerHeaderType",
      basename: "ThingViewerHeaderType",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "ThingViewerHeaderType",
      static: true,
      visibility: "public",
      since: "1.16.3",
      description: "Available ThingViewer header display types.",
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Horizontal",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The header content is displayed horizontally above the facet content"
        },
        {
          name: "Standard",
          visibility: "public",
          static: true,
          type: "string",
          description: "The standard ThingViewer header."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.ux3.ToolPopup",
      basename: "ToolPopup",
      resource: "sap/ui/ux3/ToolPopup.js",
      module: "sap/ui/ux3/ToolPopup",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      implements: ["sap.ui.core.PopupInterface"],
      description:
        "A popup which the user can open from the Shell's tool pane. Generally, the starting point would be an icon. For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar look like any common dialog box. A ToolPopup can have any content. Depending on the application type and design, the structure of the texts and input fields can be for example form-like.",
      deprecated: {
        since: "1.38",
        text: "Instead, use the <code>sap.m.Popover</code> control."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Determines the title displayed in the pop up window",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "This property is relevant for Shell use: The URL to the icon displayed in the tool area which is used to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px.",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "iconHover",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "This property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area which is used to open the popup.",
            methods: ["getIconHover", "setIconHover"]
          },
          {
            name: "iconSelected",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "This property is relevant for Shell use: The URL to the icon in selected state displayed in the tool area which is used to open the popup. If no selected icon is given, the hover icon is used.",
            methods: ["getIconSelected", "setIconSelected"]
          },
          {
            name: "modal",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              'Specifies whether the popup is modal and blocks any user-interaction with controls in the background. Changing this property while the ToolPopup is open will not have any effect. Please don\'t use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won\'t be used.',
            methods: ["getModal", "setModal"]
          },
          {
            name: "inverted",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            since: "1.11.1",
            description:
              "Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.",
            methods: ["getInverted", "setInverted"]
          },
          {
            name: "autoClose",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.13.2",
            description:
              'Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don\'t use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won\'t be used.',
            methods: ["getAutoClose", "setAutoClose"]
          },
          {
            name: "maxHeight",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            since: "1.13.2",
            description:
              "Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable.",
            methods: ["getMaxHeight", "setMaxHeight"]
          },
          {
            name: "maxWidth",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            since: "1.15.0",
            description: "Forces a maximum width of the ToolPopup in pixels.",
            methods: ["getMaxWidth", "setMaxWidth"]
          },
          {
            name: "openDuration",
            type: "int",
            defaultValue: 400,
            group: "Misc",
            visibility: "public",
            since: "1.19.0",
            description: "Time in milliseconds for the open animation.",
            methods: ["getOpenDuration", "setOpenDuration"]
          },
          {
            name: "closeDuration",
            type: "int",
            defaultValue: 400,
            group: "Misc",
            visibility: "public",
            since: "1.19.0",
            description: "Time in milliseconds for the close animation.",
            methods: ["getCloseDuration", "setCloseDuration"]
          }
        ],
        aggregations: [
          {
            name: "buttons",
            singularName: "button",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Defines the buttons to appear in the popup",
            methods: [
              "getButtons",
              "destroyButtons",
              "insertButton",
              "addButton",
              "removeButton",
              "indexOfButton",
              "removeAllButtons"
            ]
          },
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Defines the content of the popup",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        associations: [
          {
            name: "initialFocus",
            singularName: "initialFocu",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Defines the control that will get the focus when the ToolPopup is opened.",
            methods: ["getInitialFocus", "setInitialFocus"]
          },
          {
            name: "opener",
            singularName: "opener",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "This property is relevant for stand-alone use: This association needs to be set if the ToolPopup should not be opened by/with the Shell. This association contains the instance of the control that assigns the ToolPopup's position.",
            methods: ["getOpener", "setOpener"]
          },
          {
            name: "defaultButton",
            singularName: "defaultButton",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            since: "1.20.1",
            description:
              "Defines one of the buttons that have been provided via button aggregation to be the default button. This default button is initially selected, if no control is set via the initialFocus association explicitly. The default button is activated when Enter is pressed in the context of the dialog and when the currently selected element does not handle the Enter event itself.",
            methods: ["getDefaultButton", "setDefaultButton"]
          }
        ],
        events: [
          {
            name: "open",
            visibility: "public",
            description: "Event is fired when the popup opens",
            methods: ["attachOpen", "detachOpen", "fireOpen"]
          },
          {
            name: "close",
            visibility: "public",
            description:
              "Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation.",
            methods: ["attachClose", "detachClose", "fireClose"]
          },
          {
            name: "enter",
            visibility: "public",
            description:
              "Event is fired whenever the user clicks the Enter or the Enter key inside the pop up",
            parameters: {
              originalEvent: {
                name: "originalEvent",
                type: "object",
                description: "The onsapenter event, received by the pop up"
              },
              originalSrcControl: {
                name: "originalSrcControl",
                type: "sap.ui.core.Control",
                description:
                  "The control that was focused when the user pressed the Enter key (may be null)"
              }
            },
            methods: ["attachEnter", "detachEnter", "fireEnter"]
          },
          {
            name: "iconChanged",
            visibility: "public",
            description:
              "Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup). To be used by other controls which want to update the icon in their UI.",
            methods: [
              "attachIconChanged",
              "detachIconChanged",
              "fireIconChanged"
            ]
          },
          {
            name: "closed",
            visibility: "public",
            description:
              "This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.",
            methods: ["attachClosed", "detachClosed", "fireClosed"]
          },
          {
            name: "opened",
            visibility: "public",
            since: "1.19.0",
            description:
              "Event is being fired after the ToolPopup has been opened.",
            methods: ["attachOpened", "detachOpened", "fireOpened"]
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
          "Constructor for a new ToolPopup.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "close",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation."
        },
        {
          name: "closed",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call."
        },
        {
          name: "enter",
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
                    originalEvent: {
                      name: "originalEvent",
                      type: "object",
                      optional: false,
                      description:
                        "The onsapenter event, received by the pop up"
                    },
                    originalSrcControl: {
                      name: "originalSrcControl",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The control that was focused when the user pressed the Enter key (may be null)"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Event is fired whenever the user clicks the Enter or the Enter key inside the pop up"
        },
        {
          name: "iconChanged",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup). To be used by other controls which want to update the icon in their UI."
        },
        {
          name: "open",
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
                  optional: false
                }
              }
            }
          ],
          description: "Event is fired when the popup opens"
        },
        {
          name: "opened",
          visibility: "public",
          since: "1.19.0",
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
                  optional: false
                }
              }
            }
          ],
          description:
            "Event is being fired after the ToolPopup has been opened."
        }
      ],
      methods: [
        {
          name: "addButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oButton",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The button to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some button to the aggregation {@link #getButtons buttons}."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "addFocusableArea",
          visibility: "public",
          since: "1.19.0",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "sID",
              type: "string",
              optional: true,
              description:
                "ID of the corresponding element that should be focusable as well"
            }
          ],
          description:
            "Adds an ID to the Popup that should be focusable as well when using <code>autoclose</code>. Chaining is only possible if a valid type (string) is given."
        },
        {
          name: "attachClose",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:close close} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.\n\nEvent is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation."
        },
        {
          name: "attachClosed",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:closed closed} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.\n\nThis event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call."
        },
        {
          name: "attachEnter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:enter enter} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.\n\nEvent is fired whenever the user clicks the Enter or the Enter key inside the pop up"
        },
        {
          name: "attachIconChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:iconChanged iconChanged} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.\n\nEvent is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup). To be used by other controls which want to update the icon in their UI."
        },
        {
          name: "attachOpen",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:open open} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.\n\nEvent is fired when the popup opens"
        },
        {
          name: "attachOpened",
          visibility: "public",
          since: "1.19.0",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:opened opened} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.\n\nEvent is being fired after the ToolPopup has been opened."
        },
        {
          name: "close",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.ux3.ToolPopup"
          },
          parameters: [
            {
              name: "bPreventRestoreFocus",
              type: "boolean",
              optional: false,
              description:
                "If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened. This makes sense when the ToolPopup is closed programmatically from a different area of the application (outside the ToolPopup) and the focus should not move aways from that place."
            }
          ],
          description:
            "Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application when the interaction in the pop up has been completed or canceled."
        },
        {
          name: "destroyButtons",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the buttons in the aggregation {@link #getButtons buttons}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "detachClose",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:close close} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachClosed",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:closed closed} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachEnter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:enter enter} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachIconChanged",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:iconChanged iconChanged} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachOpen",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:open open} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachOpened",
          visibility: "public",
          since: "1.19.0",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:opened opened} event of this <code>sap.ui.ux3.ToolPopup</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.ux3.ToolPopup with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireClose",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:close close} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireClosed",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:closed closed} to attached listeners."
        },
        {
          name: "fireEnter",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                originalEvent: {
                  name: "originalEvent",
                  type: "object",
                  optional: true,
                  description: "The onsapenter event, received by the pop up"
                },
                originalSrcControl: {
                  name: "originalSrcControl",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The control that was focused when the user pressed the Enter key (may be null)"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:enter enter} to attached listeners."
        },
        {
          name: "fireIconChanged",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:iconChanged iconChanged} to attached listeners."
        },
        {
          name: "fireOpen",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:open open} to attached listeners."
        },
        {
          name: "fireOpened",
          visibility: "protected",
          since: "1.19.0",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:opened opened} to attached listeners."
        },
        {
          name: "getAutoClose",
          visibility: "public",
          since: "1.13.2",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>autoClose</code>"
          },
          description:
            'Gets current value of property {@link #getAutoClose autoClose}.\n\nDetermines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don\'t use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won\'t be used.\n\nDefault value is <code>false</code>.'
        },
        {
          name: "getButtons",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getButtons buttons}.\n\nDefines the buttons to appear in the popup"
        },
        {
          name: "getCloseDuration",
          visibility: "public",
          since: "1.19.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>closeDuration</code>"
          },
          description:
            "Gets current value of property {@link #getCloseDuration closeDuration}.\n\nTime in milliseconds for the close animation.\n\nDefault value is <code>400</code>."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nDefines the content of the popup"
        },
        {
          name: "getDefaultButton",
          visibility: "public",
          since: "1.20.1",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getDefaultButton defaultButton}, or <code>null</code>."
        },
        {
          name: "getEnabled",
          visibility: "public",
          since: "1.13.1",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description:
            'Indicates whether the ToolPopup is currently enabled or not.\n\nApplications can\'t control the enabled state via a property. A ToolPopup is implicitly enabled depending on its <code>openState</code>. Descendant controls that honor the enabled state of their ancestors will appear disabled after the ToolPopup is closed.\n\nSince 1.13.1. Whether a dialog is regarded as "enabled" during the state transitions (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase and disabled during the CLOSING phase. The only potential change would be to treat the OPENING phase as disabled as well. Applications should be prepared to receive events from "enabled" controls after they called open() on the dialog until close() is called on it. If the mentioned potential change should happen, the dialog will become enabled only after the transition to OPEN. Events from "enabled" children then can still only arrive between open() and close(), so applications that obey the previous rule should continue to work. Only end users or code that explicitly triggers pseudo user events would notice a difference. <br> A second aspect that might change is the visual behavior of the content: during the CLOSING phase it \'looks\' enabled but in fact it is already disabled. This avoids unnecessary redraws for content that becomes hidden soon. Should this show to be confusing for end users, it might be changed.'
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nThis property is relevant for Shell use: The URL to the icon displayed in the tool area which is used to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px."
        },
        {
          name: "getIconHover",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>iconHover</code>"
          },
          description:
            "Gets current value of property {@link #getIconHover iconHover}.\n\nThis property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area which is used to open the popup."
        },
        {
          name: "getInitialFocus",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or <code>null</code>."
        },
        {
          name: "getInverted",
          visibility: "public",
          since: "1.11.1",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>inverted</code>"
          },
          description:
            "Gets current value of property {@link #getInverted inverted}.\n\nSpecifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMaxHeight",
          visibility: "public",
          since: "1.13.2",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>maxHeight</code>"
          },
          description:
            "Gets current value of property {@link #getMaxHeight maxHeight}.\n\nForces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable."
        },
        {
          name: "getMaxWidth",
          visibility: "public",
          since: "1.15.0",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>maxWidth</code>"
          },
          description:
            "Gets current value of property {@link #getMaxWidth maxWidth}.\n\nForces a maximum width of the ToolPopup in pixels."
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
            "Returns a metadata object for class sap.ui.ux3.ToolPopup."
        },
        {
          name: "getModal",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>modal</code>"
          },
          description:
            'Gets current value of property {@link #getModal modal}.\n\nSpecifies whether the popup is modal and blocks any user-interaction with controls in the background. Changing this property while the ToolPopup is open will not have any effect. Please don\'t use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won\'t be used.\n\nDefault value is <code>false</code>.'
        },
        {
          name: "getOpenDuration",
          visibility: "public",
          since: "1.19.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>openDuration</code>"
          },
          description:
            "Gets current value of property {@link #getOpenDuration openDuration}.\n\nTime in milliseconds for the open animation.\n\nDefault value is <code>400</code>."
        },
        {
          name: "getOpener",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getOpener opener}, or <code>null</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nDetermines the title displayed in the pop up window"
        },
        {
          name: "indexOfButton",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oButton",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The button whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oButton",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The button to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the button should be inserted at; for a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value greater than the current size of the aggregation, the button is inserted at the last position"
            }
          ],
          description:
            "Inserts a button into the aggregation {@link #getButtons buttons}."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "isOpen",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean"
          },
          description: "Indicates whether the pop up is currently open"
        },
        {
          name: "open",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup"
          },
          parameters: [
            {
              name: "my",
              type: "sap.ui.core.Popup.Dock",
              optional: true,
              defaultValue: "sap.ui.core.Popup.Dock.CenterCenter",
              description:
                "The ToolPopup's content reference position for docking"
            },
            {
              name: "at",
              type: "sap.ui.core.Popup.Dock",
              optional: true,
              defaultValue: "sap.ui.core.Popup.Dock.CenterCenter",
              description: 'The "of" element\'s reference point for docking to'
            }
          ],
          description:
            "Opens the ToolPopup. It is checked which control wants to open the ToolPopup. The Shell was previously set as parent so the corresponding parent element is used to set the correct position of the ToolPopup. If another control (i.e. a button) opens the ToolPopup, the control must be previously set as <code>opener</code> via <code>setOpener</code> to the ToolPopup. Corresponding to this opener the position of the ToolPopup will be set. It's also possible to set the position above, below or left from the opener. This can be done via the possible parameters <code>my</code> and <code>at</code>. These parameters refers to work the same way as they do of sap.ui.core.Popup.open."
        },
        {
          name: "removeAllButtons",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getButtons buttons}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed button or <code>null</code>"
          },
          parameters: [
            {
              name: "vButton",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The button to remove or its index or id"
            }
          ],
          description:
            "Removes a button from the aggregation {@link #getButtons buttons}."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "removeFocusableArea",
          visibility: "public",
          since: "1.19.0",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "sID",
              type: "string",
              optional: true,
              description: "ID of the corresponding element"
            }
          ],
          description:
            "Removes an ID to the Popup that should be focusable as well when using <code>autoclose</code>. Chaining is only possible if a valid type (string) is given."
        },
        {
          name: "setAutoClose",
          visibility: "public",
          since: "1.13.2",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAutoClose",
              type: "boolean",
              optional: false,
              description: "New value for property <code>autoClose</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getAutoClose autoClose}.\n\nDetermines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don\'t use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won\'t be used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.'
        },
        {
          name: "setAutoCloseAreas",
          visibility: "public",
          since: "1.19.0",
          parameters: [
            {
              name: "aAutoCloseAreas",
              type: "Element[]",
              optional: false
            }
          ],
          description:
            "This is just a forward to the Popup's function (sap.ui.core.Popup.setAutoCloseAreas) with the same functionality."
        },
        {
          name: "setCloseDuration",
          visibility: "public",
          since: "1.19.0",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iCloseDuration",
              type: "int",
              optional: false,
              description: "New value for property <code>closeDuration</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCloseDuration closeDuration}.\n\nTime in milliseconds for the close animation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>400</code>."
        },
        {
          name: "setDefaultButton",
          visibility: "public",
          since: "1.20.1",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oDefaultButton",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this defaultButton association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getDefaultButton defaultButton}."
        },
        {
          name: "setInitialFocus",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oInitialFocus",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this initialFocus association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getInitialFocus initialFocus}."
        },
        {
          name: "setInverted",
          visibility: "public",
          since: "1.11.1",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bInverted",
              type: "boolean",
              optional: false,
              description: "New value for property <code>inverted</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getInverted inverted}.\n\nSpecifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setMaxHeight",
          visibility: "public",
          since: "1.13.2",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sMaxHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>maxHeight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMaxHeight maxHeight}.\n\nForces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setModal",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bModal",
              type: "boolean",
              optional: false,
              description: "New value for property <code>modal</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getModal modal}.\n\nSpecifies whether the popup is modal and blocks any user-interaction with controls in the background. Changing this property while the ToolPopup is open will not have any effect. Please don\'t use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won\'t be used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.'
        },
        {
          name: "setOpenDuration",
          visibility: "public",
          since: "1.19.0",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iOpenDuration",
              type: "int",
              optional: false,
              description: "New value for property <code>openDuration</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getOpenDuration openDuration}.\n\nTime in milliseconds for the open animation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>400</code>."
        },
        {
          name: "setOpener",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oOpener",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this opener association; alternatively, an element instance may be given"
            }
          ],
          description: "Sets the associated {@link #getOpener opener}."
        },
        {
          name: "setPosition",
          visibility: "public",
          "ui5-metamodel": true,
          description:
            "Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.ux3.ToolPopup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nDetermines the title displayed in the pop up window\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.ux3.VisibleItemCountMode",
      basename: "VisibleItemCountMode",
      resource: "sap/ui/ux3/library.js",
      module: "sap/ui/ux3/library",
      export: "VisibleItemCountMode",
      static: true,
      visibility: "public",
      description:
        'VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto) in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default).',
      deprecated: {
        since: "1.38"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Auto",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The FacetFilter automatically fills the height of the surrounding container. The visibleItemCount property is automatically changed accordingly."
        },
        {
          name: "Fixed",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The FacetFilter always has as many items in the FacetFilterList as defined in the visibleItemCount property."
        }
      ]
    }
  ]
};