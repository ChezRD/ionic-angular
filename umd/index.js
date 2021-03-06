(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./components/app/app-root", "./components/app/menu-controller", "./components/action-sheet/action-sheet", "./components/action-sheet/action-sheet-controller", "./components/action-sheet/action-sheet-component", "./components/alert/alert", "./components/alert/alert-controller", "./components/alert/alert-component", "./components/app/app", "./components/avatar/avatar", "./components/backdrop/backdrop", "./components/badge/badge", "./components/button/button", "./components/card/card", "./components/card/card-content", "./components/card/card-header", "./components/card/card-title", "./components/checkbox/checkbox", "./components/chip/chip", "./components/content/content", "./components/datetime/datetime", "./components/fab/fab", "./components/fab/fab-container", "./components/fab/fab-list", "./components/grid/col", "./components/grid/grid", "./components/grid/row", "./components/ion", "./components/icon/icon", "./components/img/img", "./components/infinite-scroll/infinite-scroll", "./components/infinite-scroll/infinite-scroll-content", "./components/input/input", "./components/item/item", "./components/item/item-content", "./components/item/item-divider", "./components/item/item-group", "./components/item/item-options", "./components/item/item-reorder", "./components/item/item-sliding", "./components/item/reorder", "./components/label/label", "./components/list/list", "./components/list/list-header", "./components/loading/loading", "./components/loading/loading-controller", "./components/loading/loading-component", "./components/menu/menu", "./components/menu/menu-close", "./components/menu/menu-toggle", "./components/menu/menu-types", "./components/modal/modal", "./components/modal/modal-component", "./components/modal/modal-controller", "./components/nav/nav", "./components/nav/nav-pop", "./components/nav/nav-pop-anchor", "./components/nav/nav-push", "./components/nav/nav-push-anchor", "./components/note/note", "./components/option/option", "./components/picker/picker", "./components/picker/picker-component", "./components/picker/picker-column", "./components/picker/picker-controller", "./components/popover/popover", "./components/popover/popover-component", "./components/popover/popover-controller", "./components/radio/radio-button", "./components/radio/radio-group", "./components/range/range", "./components/range/range-knob", "./components/refresher/refresher", "./components/refresher/refresher-content", "./components/scroll/scroll", "./components/searchbar/searchbar", "./components/segment/segment", "./components/segment/segment-button", "./components/select/select", "./components/select/select-popover-component", "./components/show-hide-when/show-when", "./components/show-hide-when/display-when", "./components/show-hide-when/hide-when", "./components/slides/slide", "./components/slides/slides", "./components/spinner/spinner", "./components/split-pane/split-pane", "./components/tabs/tab", "./components/tabs/tab-button", "./components/tabs/tab-highlight", "./components/tabs/tabs", "./components/toast/toast", "./components/toast/toast-component", "./components/toast/toast-controller", "./components/toggle/toggle", "./components/toolbar/toolbar-footer", "./components/toolbar/toolbar-header", "./components/toolbar/toolbar", "./components/toolbar/toolbar-item", "./components/toolbar/toolbar-title", "./components/toolbar/navbar", "./components/thumbnail/thumbnail", "./components/typography/typography", "./components/virtual-scroll/virtual-footer", "./components/virtual-scroll/virtual-header", "./components/virtual-scroll/virtual-item", "./components/virtual-scroll/virtual-scroll", "./config/config", "./platform/dom-controller", "./platform/platform", "./tap-click/haptic", "./navigation/deep-linker", "./navigation/ionic-page", "./navigation/nav-controller", "./navigation/nav-controller-base", "./navigation/nav-params", "./navigation/nav-util", "./tap-click/tap-click", "./navigation/url-serializer", "./navigation/view-controller", "./gestures/pan-gesture", "./gestures/gesture", "./gestures/slide-edge-gesture", "./gestures/slide-gesture", "./gestures/gesture-controller", "./util/events", "./util/ionic-error-handler", "./platform/keyboard", "./util/form", "./util/util", "./animations/animation", "./transitions/page-transition", "./transitions/transition", "./platform/platform-registry", "./config/mode-registry", "./gestures/gesture-config", "./module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app_root_1 = require("./components/app/app-root");
    exports.IonicApp = app_root_1.IonicApp;
    var menu_controller_1 = require("./components/app/menu-controller");
    exports.MenuController = menu_controller_1.MenuController;
    var action_sheet_1 = require("./components/action-sheet/action-sheet");
    exports.ActionSheet = action_sheet_1.ActionSheet;
    var action_sheet_controller_1 = require("./components/action-sheet/action-sheet-controller");
    exports.ActionSheetController = action_sheet_controller_1.ActionSheetController;
    var action_sheet_component_1 = require("./components/action-sheet/action-sheet-component");
    exports.ActionSheetCmp = action_sheet_component_1.ActionSheetCmp;
    var alert_1 = require("./components/alert/alert");
    exports.Alert = alert_1.Alert;
    var alert_controller_1 = require("./components/alert/alert-controller");
    exports.AlertController = alert_controller_1.AlertController;
    var alert_component_1 = require("./components/alert/alert-component");
    exports.AlertCmp = alert_component_1.AlertCmp;
    var app_1 = require("./components/app/app");
    exports.App = app_1.App;
    var avatar_1 = require("./components/avatar/avatar");
    exports.Avatar = avatar_1.Avatar;
    var backdrop_1 = require("./components/backdrop/backdrop");
    exports.Backdrop = backdrop_1.Backdrop;
    var badge_1 = require("./components/badge/badge");
    exports.Badge = badge_1.Badge;
    var button_1 = require("./components/button/button");
    exports.Button = button_1.Button;
    var card_1 = require("./components/card/card");
    exports.Card = card_1.Card;
    var card_content_1 = require("./components/card/card-content");
    exports.CardContent = card_content_1.CardContent;
    var card_header_1 = require("./components/card/card-header");
    exports.CardHeader = card_header_1.CardHeader;
    var card_title_1 = require("./components/card/card-title");
    exports.CardTitle = card_title_1.CardTitle;
    var checkbox_1 = require("./components/checkbox/checkbox");
    exports.Checkbox = checkbox_1.Checkbox;
    var chip_1 = require("./components/chip/chip");
    exports.Chip = chip_1.Chip;
    var content_1 = require("./components/content/content");
    exports.Content = content_1.Content;
    var datetime_1 = require("./components/datetime/datetime");
    exports.DateTime = datetime_1.DateTime;
    var fab_1 = require("./components/fab/fab");
    exports.FabButton = fab_1.FabButton;
    var fab_container_1 = require("./components/fab/fab-container");
    exports.FabContainer = fab_container_1.FabContainer;
    var fab_list_1 = require("./components/fab/fab-list");
    exports.FabList = fab_list_1.FabList;
    var col_1 = require("./components/grid/col");
    exports.Col = col_1.Col;
    var grid_1 = require("./components/grid/grid");
    exports.Grid = grid_1.Grid;
    var row_1 = require("./components/grid/row");
    exports.Row = row_1.Row;
    var ion_1 = require("./components/ion");
    exports.Ion = ion_1.Ion;
    var icon_1 = require("./components/icon/icon");
    exports.Icon = icon_1.Icon;
    var img_1 = require("./components/img/img");
    exports.Img = img_1.Img;
    var infinite_scroll_1 = require("./components/infinite-scroll/infinite-scroll");
    exports.InfiniteScroll = infinite_scroll_1.InfiniteScroll;
    var infinite_scroll_content_1 = require("./components/infinite-scroll/infinite-scroll-content");
    exports.InfiniteScrollContent = infinite_scroll_content_1.InfiniteScrollContent;
    var input_1 = require("./components/input/input");
    exports.TextInput = input_1.TextInput;
    var item_1 = require("./components/item/item");
    exports.Item = item_1.Item;
    var item_content_1 = require("./components/item/item-content");
    exports.ItemContent = item_content_1.ItemContent;
    var item_divider_1 = require("./components/item/item-divider");
    exports.ItemDivider = item_divider_1.ItemDivider;
    var item_group_1 = require("./components/item/item-group");
    exports.ItemGroup = item_group_1.ItemGroup;
    var item_options_1 = require("./components/item/item-options");
    exports.ItemOptions = item_options_1.ItemOptions;
    var item_reorder_1 = require("./components/item/item-reorder");
    exports.ItemReorder = item_reorder_1.ItemReorder;
    var item_sliding_1 = require("./components/item/item-sliding");
    exports.ItemSliding = item_sliding_1.ItemSliding;
    var reorder_1 = require("./components/item/reorder");
    exports.Reorder = reorder_1.Reorder;
    var label_1 = require("./components/label/label");
    exports.Label = label_1.Label;
    var list_1 = require("./components/list/list");
    exports.List = list_1.List;
    var list_header_1 = require("./components/list/list-header");
    exports.ListHeader = list_header_1.ListHeader;
    var loading_1 = require("./components/loading/loading");
    exports.Loading = loading_1.Loading;
    var loading_controller_1 = require("./components/loading/loading-controller");
    exports.LoadingController = loading_controller_1.LoadingController;
    var loading_component_1 = require("./components/loading/loading-component");
    exports.LoadingCmp = loading_component_1.LoadingCmp;
    var menu_1 = require("./components/menu/menu");
    exports.Menu = menu_1.Menu;
    var menu_close_1 = require("./components/menu/menu-close");
    exports.MenuClose = menu_close_1.MenuClose;
    var menu_toggle_1 = require("./components/menu/menu-toggle");
    exports.MenuToggle = menu_toggle_1.MenuToggle;
    var menu_types_1 = require("./components/menu/menu-types");
    exports.MenuType = menu_types_1.MenuType;
    var modal_1 = require("./components/modal/modal");
    exports.Modal = modal_1.Modal;
    var modal_component_1 = require("./components/modal/modal-component");
    exports.ModalCmp = modal_component_1.ModalCmp;
    var modal_controller_1 = require("./components/modal/modal-controller");
    exports.ModalController = modal_controller_1.ModalController;
    var nav_1 = require("./components/nav/nav");
    exports.Nav = nav_1.Nav;
    var nav_pop_1 = require("./components/nav/nav-pop");
    exports.NavPop = nav_pop_1.NavPop;
    var nav_pop_anchor_1 = require("./components/nav/nav-pop-anchor");
    exports.NavPopAnchor = nav_pop_anchor_1.NavPopAnchor;
    var nav_push_1 = require("./components/nav/nav-push");
    exports.NavPush = nav_push_1.NavPush;
    var nav_push_anchor_1 = require("./components/nav/nav-push-anchor");
    exports.NavPushAnchor = nav_push_anchor_1.NavPushAnchor;
    var note_1 = require("./components/note/note");
    exports.Note = note_1.Note;
    var option_1 = require("./components/option/option");
    exports.Option = option_1.Option;
    var picker_1 = require("./components/picker/picker");
    exports.Picker = picker_1.Picker;
    var picker_component_1 = require("./components/picker/picker-component");
    exports.PickerCmp = picker_component_1.PickerCmp;
    var picker_column_1 = require("./components/picker/picker-column");
    exports.PickerColumnCmp = picker_column_1.PickerColumnCmp;
    var picker_controller_1 = require("./components/picker/picker-controller");
    exports.PickerController = picker_controller_1.PickerController;
    var popover_1 = require("./components/popover/popover");
    exports.Popover = popover_1.Popover;
    var popover_component_1 = require("./components/popover/popover-component");
    exports.PopoverCmp = popover_component_1.PopoverCmp;
    var popover_controller_1 = require("./components/popover/popover-controller");
    exports.PopoverController = popover_controller_1.PopoverController;
    var radio_button_1 = require("./components/radio/radio-button");
    exports.RadioButton = radio_button_1.RadioButton;
    var radio_group_1 = require("./components/radio/radio-group");
    exports.RadioGroup = radio_group_1.RadioGroup;
    var range_1 = require("./components/range/range");
    exports.Range = range_1.Range;
    var range_knob_1 = require("./components/range/range-knob");
    exports.RangeKnob = range_knob_1.RangeKnob;
    var refresher_1 = require("./components/refresher/refresher");
    exports.Refresher = refresher_1.Refresher;
    var refresher_content_1 = require("./components/refresher/refresher-content");
    exports.RefresherContent = refresher_content_1.RefresherContent;
    var scroll_1 = require("./components/scroll/scroll");
    exports.Scroll = scroll_1.Scroll;
    var searchbar_1 = require("./components/searchbar/searchbar");
    exports.Searchbar = searchbar_1.Searchbar;
    var segment_1 = require("./components/segment/segment");
    exports.Segment = segment_1.Segment;
    var segment_button_1 = require("./components/segment/segment-button");
    exports.SegmentButton = segment_button_1.SegmentButton;
    var select_1 = require("./components/select/select");
    exports.Select = select_1.Select;
    var select_popover_component_1 = require("./components/select/select-popover-component");
    exports.SelectPopover = select_popover_component_1.SelectPopover;
    var show_when_1 = require("./components/show-hide-when/show-when");
    exports.ShowWhen = show_when_1.ShowWhen;
    var display_when_1 = require("./components/show-hide-when/display-when");
    exports.DisplayWhen = display_when_1.DisplayWhen;
    var hide_when_1 = require("./components/show-hide-when/hide-when");
    exports.HideWhen = hide_when_1.HideWhen;
    var slide_1 = require("./components/slides/slide");
    exports.Slide = slide_1.Slide;
    var slides_1 = require("./components/slides/slides");
    exports.Slides = slides_1.Slides;
    var spinner_1 = require("./components/spinner/spinner");
    exports.Spinner = spinner_1.Spinner;
    var split_pane_1 = require("./components/split-pane/split-pane");
    exports.SplitPane = split_pane_1.SplitPane;
    exports.RootNode = split_pane_1.RootNode;
    var tab_1 = require("./components/tabs/tab");
    exports.Tab = tab_1.Tab;
    var tab_button_1 = require("./components/tabs/tab-button");
    exports.TabButton = tab_button_1.TabButton;
    var tab_highlight_1 = require("./components/tabs/tab-highlight");
    exports.TabHighlight = tab_highlight_1.TabHighlight;
    var tabs_1 = require("./components/tabs/tabs");
    exports.Tabs = tabs_1.Tabs;
    var toast_1 = require("./components/toast/toast");
    exports.Toast = toast_1.Toast;
    var toast_component_1 = require("./components/toast/toast-component");
    exports.ToastCmp = toast_component_1.ToastCmp;
    var toast_controller_1 = require("./components/toast/toast-controller");
    exports.ToastController = toast_controller_1.ToastController;
    var toggle_1 = require("./components/toggle/toggle");
    exports.Toggle = toggle_1.Toggle;
    var toolbar_footer_1 = require("./components/toolbar/toolbar-footer");
    exports.Footer = toolbar_footer_1.Footer;
    var toolbar_header_1 = require("./components/toolbar/toolbar-header");
    exports.Header = toolbar_header_1.Header;
    var toolbar_1 = require("./components/toolbar/toolbar");
    exports.Toolbar = toolbar_1.Toolbar;
    var toolbar_item_1 = require("./components/toolbar/toolbar-item");
    exports.ToolbarItem = toolbar_item_1.ToolbarItem;
    var toolbar_title_1 = require("./components/toolbar/toolbar-title");
    exports.ToolbarTitle = toolbar_title_1.ToolbarTitle;
    var navbar_1 = require("./components/toolbar/navbar");
    exports.Navbar = navbar_1.Navbar;
    var thumbnail_1 = require("./components/thumbnail/thumbnail");
    exports.Thumbnail = thumbnail_1.Thumbnail;
    var typography_1 = require("./components/typography/typography");
    exports.Typography = typography_1.Typography;
    var virtual_footer_1 = require("./components/virtual-scroll/virtual-footer");
    exports.VirtualFooter = virtual_footer_1.VirtualFooter;
    var virtual_header_1 = require("./components/virtual-scroll/virtual-header");
    exports.VirtualHeader = virtual_header_1.VirtualHeader;
    var virtual_item_1 = require("./components/virtual-scroll/virtual-item");
    exports.VirtualItem = virtual_item_1.VirtualItem;
    var virtual_scroll_1 = require("./components/virtual-scroll/virtual-scroll");
    exports.VirtualScroll = virtual_scroll_1.VirtualScroll;
    /**
     * Global Providers
     */
    var config_1 = require("./config/config");
    exports.Config = config_1.Config;
    exports.setupConfig = config_1.setupConfig;
    exports.ConfigToken = config_1.ConfigToken;
    var dom_controller_1 = require("./platform/dom-controller");
    exports.DomController = dom_controller_1.DomController;
    var platform_1 = require("./platform/platform");
    exports.Platform = platform_1.Platform;
    exports.setupPlatform = platform_1.setupPlatform;
    var haptic_1 = require("./tap-click/haptic");
    exports.Haptic = haptic_1.Haptic;
    var deep_linker_1 = require("./navigation/deep-linker");
    exports.DeepLinker = deep_linker_1.DeepLinker;
    var ionic_page_1 = require("./navigation/ionic-page");
    exports.IonicPage = ionic_page_1.IonicPage;
    var nav_controller_1 = require("./navigation/nav-controller");
    exports.NavController = nav_controller_1.NavController;
    var nav_controller_base_1 = require("./navigation/nav-controller-base");
    exports.NavControllerBase = nav_controller_base_1.NavControllerBase;
    var nav_params_1 = require("./navigation/nav-params");
    exports.NavParams = nav_params_1.NavParams;
    var nav_util_1 = require("./navigation/nav-util");
    exports.DeepLinkMetadata = nav_util_1.DeepLinkMetadata;
    exports.DeepLinkMetadataFactory = nav_util_1.DeepLinkMetadataFactory;
    var tap_click_1 = require("./tap-click/tap-click");
    exports.TapClick = tap_click_1.TapClick;
    exports.setupTapClick = tap_click_1.setupTapClick;
    exports.isActivatable = tap_click_1.isActivatable;
    var url_serializer_1 = require("./navigation/url-serializer");
    exports.UrlSerializer = url_serializer_1.UrlSerializer;
    exports.DeepLinkConfigToken = url_serializer_1.DeepLinkConfigToken;
    var view_controller_1 = require("./navigation/view-controller");
    exports.ViewController = view_controller_1.ViewController;
    /**
     * Export Utils
     */
    var pan_gesture_1 = require("./gestures/pan-gesture");
    exports.PanGesture = pan_gesture_1.PanGesture;
    var gesture_1 = require("./gestures/gesture");
    exports.Gesture = gesture_1.Gesture;
    var slide_edge_gesture_1 = require("./gestures/slide-edge-gesture");
    exports.SlideEdgeGesture = slide_edge_gesture_1.SlideEdgeGesture;
    var slide_gesture_1 = require("./gestures/slide-gesture");
    exports.SlideGesture = slide_gesture_1.SlideGesture;
    var gesture_controller_1 = require("./gestures/gesture-controller");
    exports.BLOCK_ALL = gesture_controller_1.BLOCK_ALL;
    exports.GESTURE_GO_BACK_SWIPE = gesture_controller_1.GESTURE_GO_BACK_SWIPE;
    exports.GESTURE_MENU_SWIPE = gesture_controller_1.GESTURE_MENU_SWIPE;
    exports.GESTURE_ITEM_SWIPE = gesture_controller_1.GESTURE_ITEM_SWIPE;
    exports.GESTURE_REFRESHER = gesture_controller_1.GESTURE_REFRESHER;
    exports.GESTURE_TOGGLE = gesture_controller_1.GESTURE_TOGGLE;
    exports.GestureController = gesture_controller_1.GestureController;
    exports.GestureDelegate = gesture_controller_1.GestureDelegate;
    exports.BlockerDelegate = gesture_controller_1.BlockerDelegate;
    var events_1 = require("./util/events");
    exports.Events = events_1.Events;
    exports.setupEvents = events_1.setupEvents;
    exports.setupProvideEvents = events_1.setupProvideEvents;
    var ionic_error_handler_1 = require("./util/ionic-error-handler");
    exports.IonicErrorHandler = ionic_error_handler_1.IonicErrorHandler;
    var keyboard_1 = require("./platform/keyboard");
    exports.Keyboard = keyboard_1.Keyboard;
    var form_1 = require("./util/form");
    exports.Form = form_1.Form;
    exports.IonicFormInput = form_1.IonicFormInput;
    exports.IonicTapInput = form_1.IonicTapInput;
    var util_1 = require("./util/util");
    exports.reorderArray = util_1.reorderArray;
    exports.normalizeURL = util_1.normalizeURL;
    var animation_1 = require("./animations/animation");
    exports.Animation = animation_1.Animation;
    var page_transition_1 = require("./transitions/page-transition");
    exports.PageTransition = page_transition_1.PageTransition;
    var transition_1 = require("./transitions/transition");
    exports.Transition = transition_1.Transition;
    var platform_registry_1 = require("./platform/platform-registry");
    exports.PlatformConfigToken = platform_registry_1.PlatformConfigToken;
    var mode_registry_1 = require("./config/mode-registry");
    exports.registerModeConfigs = mode_registry_1.registerModeConfigs;
    var gesture_config_1 = require("./gestures/gesture-config");
    exports.IonicGestureConfig = gesture_config_1.IonicGestureConfig;
    var module_1 = require("./module");
    exports.IonicModule = module_1.IonicModule;
    exports.IonicPageModule = module_1.IonicPageModule;
    exports.provideLocationStrategy = module_1.provideLocationStrategy;
});
//# sourceMappingURL=index.js.map