const getTheme = require("./theme");

let colors = {
	black: "#000",
	white: "#fff",
	blue: "#112233",
	yellow: "#ffc107",
	"light-blue": "#14273b",
	"dark-yellow": "#d6a206",
	test: "#ff00ff",
	evil: "#666"
};

function getTumbleTheme({ theme, style, name }) {
	let themeInfo = {};
	if (theme) themeInfo = getTheme({ theme, name });

	Object.assign(themeInfo.colors, {
		"activityBar.activeBackground": colors["dark-yellow"],
		"activityBar.activeBorder": colors.yellow,
		"activityBar.activeFocusBorder": colors.yellow,
		"activityBar.background": colors.yellow,
		"activityBar.border": colors.yellow,
		"activityBar.foreground": colors.black,
		"activityBar.inactiveForeground": colors.black,

		"activityBarBadge.background": colors.yellow,
		"activityBarBadge.foreground": colors.black,

		"badge.background": colors.yellow,
		"badge.foreground": colors.black,

		"titleBar.activeBackground": colors.blue,
		"titleBar.activeForeground": colors.yellow,
		"titleBar.inactiveBackground": colors.blue,
		"titleBar.inactiveForeground": colors.white,

		"menubar.selectionForeground": colors.black,
		"menubar.selectionBackground": colors.yellow,

		"menu.background": colors.blue,
		"menu.foreground": colors.white,
		"menu.selectionBackground": colors.yellow,
		"menu.selectionForeground": colors.black,

		"toolbar.activeBackground": colors.yellow,

		"banner.background": colors.blue,
		"banner.foreground": colors.test,
		"banner.iconForeground": colors.test,

		"breadcrumb.activeSelectionForeground": colors.yellow,
		"breadcrumb.background": colors.blue,
		"breadcrumb.focusForeground": colors.yellow,
		"breadcrumb.foreground": colors.white,

		"breadcrumbPicker.background": colors.blue,

		"button.background": colors.yellow,
		"button.foreground": colors.black,
		"button.hoverBackground": colors["dark-yellow"],
		"button.secondaryBackground": colors.blue,
		"button.secondaryForeground": colors.white,
		"button.secondaryHoverBackground": colors["light-blue"],

		"checkbox.background": colors.yellow,
		"checkbox.foreground": colors.black,


		"sideBar.background": colors.blue,
		"sideBar.dropBackground": colors.test,
		"sideBar.foreground": colors.white,
		"sideBarSectionHeader.background": colors.blue,
		"sideBarSectionHeader.foreground": colors.white,


		"tab.activeModifiedBorder": colors.test,
		"tab.activeForeground": colors.white,
		"tab.activeBorderTop": colors.yellow,
		"tab.activeBackground": colors.blue,

		"dropdown.listBackground": colors.blue,
		"dropdown.foreground": colors.white,

		"editor.background": "#001020",

		"statusBar.background": colors.blue,
		"statusBar.debuggingBackground": colors.yellow,
		"statusBar.debuggingForeground": colors.black,
		"statusBar.foreground": colors.white,
		"statusBar.noFolderBackground": colors.blue,
		"statusBar.noFolderForeground": colors.evil,

		"statusBarItem.activeBackground": colors.yellow,
	});

	return themeInfo;
}

module.exports = getTumbleTheme;