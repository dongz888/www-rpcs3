/* Handles dark mode save states (Needs refactoring)*/
$(document).ready(function() {
    var sel = $.cookie("save-darkmode"); // get the cookie
    sel = sel == "true";
    $('.toggle-darkmode').toggleClass("activate-darkmode", sel).on('click', function(e) {
		$('.darkmode-icon').toggleClass("dm-icon");
        $('body').toggleClass("dm-bg");
		$('.darkmode-invert').toggleClass("dm-invert");
        $('.darkmode-header').toggleClass("dm-header");
		$('.darkmode-header-patreon').toggleClass("dm-header-patreon");
		$('.darkmode-feature').toggleClass("dm-bg");
        $('.darkmode-menubar').toggleClass("dm-menubar");
        $('.darkmode-block').toggleClass("dm-block");
		$('.darkmode-context').toggleClass("dm-default");
		$('.darkmode-contribute').toggleClass("dm-default");
        $('.darkmode-panel').toggleClass("dm-panel");
        $('.darkmode-txt').toggleClass("dm-txt");
		$('.darkmode-txt2').toggleClass("content-txt-wrap-invert");
        $('.darkmode-ad').toggleClass("dm-default");
        $('.darkmode-highlight').toggleClass("dm-highlight");
        $('.darkmode-menubar-l1').toggleClass("dm-menubar-l1");
        $('.darkmode-menubar-l2').toggleClass("dm-menubar-l2");
		
		
	 $('.submenu-con-outer').toggleClass("dm-submenu-outer");
     $('.submenu-btn-button').toggleClass("dm-submenu-btn");
	 $('.submenu-ico-lip').toggleClass("dm-submenu-lip");
		
		
        $('.darkmode-navsidebar-title').toggleClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').toggleClass("dm-default");
        $('.darkmode-navsidebar-txt').toggleClass("dm-navsidebar-txt");
		$('.darkmode-buttons-general').toggleClass("dm-buttons-general");
        $(".markdown-body").toggleClass("dm-txt");
        $(".markdown-body h2").toggleClass("dm-txt");
		$(".markdown-body h2").toggleClass("dm-udl");
        $(".container-con-block h2").toggleClass("dm-txt");
        $(".container-con-block p").toggleClass("dm-txt");
		$(".markdown-body li").toggleClass("dm-txt");
		$(".content-ico-flag").toggleClass("dm-flag");
		$('.darkmode-footer-logo').toggleClass("dm-footer-logo");
        $(".divTable").toggleClass("dm-default");
		$(".divTableHeading").toggleClass("dm-default");
        $(".divTableHeading").toggleClass("dm-txt");
		$(".divTableBody").toggleClass("dm-default");
        $(".divTableBody").toggleClass("dm-txt");
        $(".compat-tx1-criteria").toggleClass("dm-default");
        $(".compat-tx1-criteria").toggleClass("dm-txt");
        $(".compat-status-text").toggleClass("dm-txt");
        $(".compat-search-character").toggleClass("dm-default-search");
        $("#compat-con-pages").toggleClass("dm-default dm-txt");
        $("#compat-author").toggleClass("dm-compat-author");
        $(".nav-links").toggleClass("dm-default dm-txt");
        $(".hentry").toggleClass("dm-default dm-txt");
        $(".entry-header").toggleClass("dm-blog-header");
        $(".entry-footer").toggleClass("dm-blog-footer");
        $(".entry-content h2").toggleClass("dm-blog-h2");
		$(".entry-content ul li").toggleClass("dm-txt");
        $(".site-description").toggleClass("dm-blog-sidebar");
        $(".widget-title").toggleClass("dm-blog-sidebar");
        $(".page-header").toggleClass("dm-default");
        $(".page-content").toggleClass("dm-default dm-txt");
		$(".debug-main").toggleClass("dm-default");
		$(".debug-left").toggleClass("dm-default");
    });
    $(".toggle-darkmode").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-darkmode", sel);
        $.cookie("save-darkmode", sel, {
            expires: 365,
            path: '/'
        });
    });
});
$(document).ready(function() {
    if ($('.toggle-darkmode').hasClass('activate-darkmode')) {
		$('.darkmode-icon').toggleClass("dm-icon");
        $('body').addClass("dm-bg");
		$('.darkmode-invert').addClass("dm-invert");
        $('.darkmode-header').addClass("dm-header");
		$('.darkmode-header-patreon').addClass("dm-header-patreon");
		$('.darkmode-feature').addClass("dm-bg");
        $('.darkmode-menubar').addClass("dm-menubar");
        $('.darkmode-block').addClass("dm-block");
		$('.darkmode-context').addClass("dm-default");
		$('.darkmode-contribute').addClass("dm-default");
        $('.darkmode-panel').addClass("dm-panel");
        $('.darkmode-txt').addClass("dm-txt");
		$('.darkmode-txt2').toggleClass("content-txt-wrap-invert");
        $('.darkmode-ad').addClass("dm-default");
        $('.darkmode-highlight').addClass("dm-highlight");
        $('.darkmode-menubar-l1').addClass("dm-menubar-l1");
        $('.darkmode-menubar-l2').addClass("dm-menubar-l2");
		
			 $('.submenu-con-outer').addClass("dm-submenu-outer");
     $('.submenu-btn-button').addClass("dm-submenu-btn");
	 $('.submenu-ico-lip').addClass("dm-submenu-lip");
		
        $('.darkmode-navsidebar-title').addClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').addClass("dm-default");
        $('.darkmode-navsidebar-txt').addClass("dm-navsidebar-txt");
		$('.darkmode-buttons-general').addClass("dm-buttons-general");
        $(".markdown-body").addClass("dm-txt");
        $(".markdown-body h2").addClass("dm-txt");
		$(".markdown-body h2").addClass("dm-udl");
        $(".container-con-block h2").addClass("dm-txt");
        $(".container-con-block p").addClass("dm-txt");
		$(".markdown-body li").addClass("dm-txt");
		$(".content-ico-flag").addClass("dm-flag");
		$('.darkmode-footer-logo').addClass("dm-footer-logo");
        $(".divTable").toggleClass("dm-default");
		$(".divTableHeading").toggleClass("dm-default");
        $(".divTableHeading").toggleClass("dm-txt");
		$(".divTableBody").toggleClass("dm-default");
        $(".divTableBody").toggleClass("dm-txt");
        $(".compat-tx1-criteria").toggleClass("dm-default");
        $(".compat-tx1-criteria").toggleClass("dm-txt");
        $(".compat-status-text").toggleClass("dm-txt");
        $(".compat-search-character").toggleClass("dm-default-search");
        $("#compat-con-pages").toggleClass("dm-default dm-txt");
        $("#compat-author").toggleClass("dm-compat-author");
        $(".nav-links").addClass("dm-default dm-txt");
        $(".hentry").addClass("dm-default dm-txt");
        $(".entry-header").addClass("dm-blog-header");
        $(".entry-footer").addClass("dm-blog-footer");
        $(".entry-content h2").addClass("dm-blog-h2");
		$(".entry-content ul li").addClass("dm-txt");
        $(".site-description").addClass("dm-blog-sidebar");
        $(".widget-title").addClass("dm-blog-sidebar");
        $(".page-header").addClass("dm-default");
        $(".page-content").addClass("dm-default dm-txt");
		$(".debug-main").addClass("dm-default");
		$(".debug-left").addClass("dm-default");
    } else {
		$('.darkmode-icon').removeClass("dm-icon");
        $('body').removeClass("dm-bg");
		$('.darkmode-invert').removeClass("dm-invert");
        $('.darkmode-header').removeClass("dm-header");
		$('.darkmode-header-patreon').removeClass("dm-header-patreon");
		$('.darkmode-feature').removeClass("dm-bg");
        $('.darkmode-menubar').removeClass("dm-menubar");
        $('.darkmode-block').removeClass("dm-block");
		$('.darkmode-context').removeClass("dm-default");
		$('.darkmode-contribute').removeClass("dm-default");
        $('.darkmode-panel').removeClass("dm-panel");
        $('.darkmode-txt').removeClass("dm-txt");
		$('.darkmode-txt2').addClass("content-txt-wrap-invert");
        $('.darkmode-ad').removeClass("dm-default");
        $('.darkmode-highlight').removeClass("dm-highlight");
        $('.darkmode-menubar-l1').removeClass("dm-menubar-l1");
        $('.darkmode-menubar-l2').removeClass("dm-menubar-l2");
		
	 $('.submenu-con-outer').removeClass("dm-submenu-outer");
     $('.submenu-btn-button').removeClass("dm-submenu-btn");
	 $('.submenu-ico-lip').removeClass("dm-submenu-lip");
		
        $('.darkmode-navsidebar-title').removeClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').removeClass("dm-default");
        $('.darkmode-navsidebar-txt').removeClass("dm-navsidebar-txt");
		$('.darkmode-buttons-general').removeClass("dm-buttons-general");
        $(".markdown-body").removeClass("dm-txt");
        $(".markdown-body h2").removeClass("dm-txt");
		$(".markdown-body h2").removeClass("dm-udl");
        $(".container-con-block h2").removeClass("dm-txt");
        $(".container-con-block p").removeClass("dm-txt");
		$(".markdown-body li").removeClass("dm-txt");
		$(".content-ico-flag").removeClass("dm-flag");
		$('.darkmode-footer-logo').removeClass("dm-footer-logo");
		$(".divTable").removeClass("dm-default");
		$(".divTableHeading").removeClass("dm-default");
        $(".divTableHeading").removeClass("dm-txt");
		$(".divTableBody").removeClass("dm-default");
        $(".divTableBody").removeClass("dm-txt");
        $(".compat-tx1-criteria").removeClass("dm-default");
        $(".compat-tx1-criteria").removeClass("dm-txt");
        $(".compat-status-text").removeClass("dm-txt");
        $(".compat-search-character").removeClass("dm-default-search");
        $("#compat-con-pages").removeClass("dm-default dm-txt");
        $("#compat-author").removeClass("dm-compat-author");
        $(".nav-links").removeClass("dm-default dm-txt");
        $(".hentry").removeClass("dm-default dm-txt");
        $(".entry-header").removeClass("dm-blog-header");
        $(".entry-footer").removeClass("dm-blog-footer");
        $(".entry-content h2").removeClass("dm-blog-h2");
		$(".entry-content ul li").removeClass("dm-txt");
        $(".site-description").removeClass("dm-blog-sidebar");
        $(".widget-title").removeClass("dm-blog-sidebar");
        $(".page-header").removeClass("dm-default");
        $(".page-content").removeClass("dm-default dm-txt");
		$(".debug-main").removeClass("dm-default");
		$(".debug-left").removeClass("dm-default");
    }
});