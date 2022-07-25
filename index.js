// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){


        },


        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***}


        events:{"onReady":"_onready", "onRender":"_onrender"},



        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout_help")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":64,
                        "min":15,
                        "max":64,
                        "locked":true,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "pos":"main",
                        "size":450,
                        "min":450,
                        "max":450,
                        "locked":true,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":10,
                        "max":50,
                        "locked":true,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setLeft("53.333333333333336em")
                .setTop("0em")
                .setWidth("85.33333333333333em")
                .setHeight("83.33333333333333em")
                .setZIndex(0)
            );
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image63")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("2.6666666666666665em")
                .setHeight("2.6666666666666665em")
                .setSrc("{/}img/FileObjectSolutionDesignEngine_32px.png")
                , "before");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image140")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setSrc("{/}img/IBM Logo 16x16.png")
                , "after");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label141")
                .setLeft("50.833333333333336em")
                .setTop("-7.5em")
                .setWidth("16.666666666666668em")
                .setCaption("(c) 2018 IBM.  All rights reserved.")
                , "after");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout145")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":230,
                        "min":230,
                        "locked":false,
                        "folded":false,
                        "hidden":true,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "size":80,
                        "min":10
                    }
                ])
                .setLeft("5.833333333333333em")
                .setTop("6.333333333333333em")
                .setWidth("75em")
                .setHeight("42.166666666666664em")
                .setType("horizontal")
                , "main");
            
            host.xui_ui_layout145.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs112")
                .setItems([
                    {
                        "id":"Instructions",
                        "caption":"Instructions",
                        "image":""
                    },
                    {
                        "id":"Sample Template",
                        "caption":"Sample Template",
                        "image":""
                    },
                    {
                        "id":"Sample Designer",
                        "caption":"Sample Designer",
                        "image":""
                    },
                    {
                        "id":"Sample Table",
                        "caption":"Sample Table",
                        "image":""
                    },
                    {
                        "id":"Sample Report",
                        "caption":"Sample Report",
                        "image":""
                    },
                    {
                        "id":"Sample JSON",
                        "caption":"Sample JSON",
                        "image":""
                    },
                    {
                        "id":"Help",
                        "caption":"Help"
                    }
                ])
                .setLeft("0.8333333333333334em")
                .setTop("9.166666666666666em")
                .setWidth("63.333333333333336em")
                .setHeight("31.5em")
                .setValue("Sample Designer")
                .onItemSelected("_refresh_selected_tab_top_level")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#000000"
                    }
                })
                , "main");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"sample_table")
                .setDirtyMark(false)
                .setShowDirtyMark(false)
                .setLeft("2.5em")
                .setTop("2.5em")
                .setAltRowsBg(true)
                .setRowNumbered(true)
                .setHeaderHeight("2.5em")
                .setColHidable(true)
                .setColMovable(true)
                .setHeader([
                    {
                        "id":"Slicestor Model",
                        "caption":"Slicestor Model",
                        "width":90,
                        "flexSize":false,
                        "type":"input"
                    },
                    {
                        "id":"Drive Slots Used",
                        "caption":"Drive Slots Used",
                        "width":100,
                        "type":"number"
                    },
                    {
                        "id":"Drive Size",
                        "caption":"Drive Size",
                        "width":90,
                        "type":"number"
                    },
                    {
                        "id":"IDA Width",
                        "caption":"IDA Width",
                        "width":70,
                        "type":"number"
                    },
                    {
                        "id":"IDA ReadT",
                        "caption":"IDA ReadT",
                        "width":70,
                        "type":"number"
                    },
                    {
                        "id":"IDA WriteT",
                        "caption":"IDA WriteT",
                        "width":70,
                        "type":"number"
                    },
                    {
                        "id":"Raw Configured",
                        "caption":"Raw Configured",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Usable Configured",
                        "caption":"Usable Configured",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Total Solution Cost",
                        "caption":"Total Solution Cost",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Usable TB Cost",
                        "caption":"Usable TB Cost",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Expansion Factor",
                        "caption":"Expansion Factor",
                        "width":100,
                        "type":"label"
                    },
                    {
                        "id":"Config ID",
                        "caption":"Config ID",
                        "width":80,
                        "type":"label"
                    },
                    {
                        "id":"Drive Slots Avail",
                        "caption":"Drive Slots Avail",
                        "width":100,
                        "type":"number"
                    },
                    {
                        "id":"Raw Headroom",
                        "caption":"Raw Headroom",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Raw Maximum",
                        "caption":"Raw Maximum",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Usable Headroom",
                        "caption":"Usable Headroom",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Usable Maximum",
                        "caption":"Usable Maximum",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Individual Drive Cost",
                        "caption":"Individual Drive Cost",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Total Drive Cost",
                        "caption":"Total Drive Cost",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Total Slicestor Cost",
                        "caption":"Total Slicestor Cost",
                        "width":110,
                        "type":"number"
                    },
                    {
                        "id":"Total Software Cost",
                        "caption":"Total Software Cost",
                        "width":110,
                        "type":"number"
                    }
                ])
                , "Sample Table");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input_project_file")
                .setDirtyMark(false)
                .setShowDirtyMark(false)
                .setLeft("0.8333333333333334em")
                .setTop("5em")
                .setWidth("66.66666666666667em")
                .setHeight("33.333333333333336em")
                .setLabelSize(null)
                .setMultiLines(true)
                , "Sample JSON");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton_import_into_project")
                .setLeft("0.8333333333333334em")
                .setTop("1.6666666666666667em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setCaption("Import into Project")
                .onClick("_import_json")
                , "Sample JSON");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton_clear_editor")
                .setLeft("12.5em")
                .setTop("1.6666666666666667em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setCaption("Clear Editor")
                .onClick("_clear_json_editor")
                , "Sample JSON");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton_save_to_disk")
                .setLeft("24.166666666666668em")
                .setTop("1.6666666666666667em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setCaption("Save to Disk")
                .onClick("_save_JSON_to_disk")
                , "Sample JSON");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout328")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "min":10,
                        "size":80,
                        "locked":false,
                        "folded":true,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":80
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#696969"
                    }
                })
                , "Sample Report");
            
            host.xui_ui_layout328.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div_sample_report_pdf_container")
                .setDock("fill")
                .setLeft("1.6666666666666667em")
                .setTop("6.416666666666667em")
                .setWidth("8.333333333333334em")
                .setHeight("8.333333333333334em")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#696969"
                    }
                })
                , "main");
            
            host.xui_ui_layout328.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar_sample_report")
                .setItems([
                    {
                        "id":"grp1",
                        "sub":[
                            {
                                "id":"Refresh",
                                "caption":"Refresh"
                            }
                        ],
                        "caption":"grp1"
                    }
                ])
                .onClick("_xui_ui_toolbar_sample_report_onclick")
                , "main");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label263")
                .setLeft("5.833333333333333em")
                .setTop("12.5em")
                .setWidth("8.333333333333334em")
                .setCaption("Sub Header")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label269")
                .setLeft("5.833333333333333em")
                .setTop("15em")
                .setWidth("8.333333333333334em")
                .setCaption("1")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#CACACA"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label275")
                .setLeft("5.833333333333333em")
                .setTop("17.5em")
                .setWidth("8.333333333333334em")
                .setCaption("2")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#CACACA"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label281")
                .setLeft("5.833333333333333em")
                .setTop("20em")
                .setWidth("8.333333333333334em")
                .setCaption("3")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#CACACA"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label341")
                .setLeft("5.833333333333333em")
                .setTop("10em")
                .setWidth("8.333333333333334em")
                .setCaption("Header")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#000000"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label342")
                .setLeft("5.833333333333333em")
                .setTop("6.333333333333333em")
                .setWidth("50em")
                .setCaption("Use these colors")
                .setHAlign("left")
                .setVAlign("middle")
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label344")
                .setLeft("21.666666666666668em")
                .setTop("12.5em")
                .setWidth("8.333333333333334em")
                .setCaption("Design")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#85CD4D"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label346")
                .setLeft("21.666666666666668em")
                .setTop("17.5em")
                .setWidth("8.333333333333334em")
                .setCaption("Error")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#FF756E"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label347")
                .setLeft("21.666666666666668em")
                .setTop("10em")
                .setWidth("8.333333333333334em")
                .setCaption("Requirement")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#1E90FF"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label596")
                .setLeft("21.666666666666668em")
                .setTop("15em")
                .setWidth("8.333333333333334em")
                .setCaption("Warning")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#FFF959"
                    }
                })
                , "Instructions");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_combo_template_1_1_1_total_required")
                .setDirtyMark(false)
                .setShowDirtyMark(false)
                .setTips("This is important to know.")
                .setLeft("5.833333333333333em")
                .setTop("2.5em")
                .setLabelSize(null)
                .setType("spin")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(1)
                .setMax(100)
                .setValue(30)
                .onChange("_refresh_sample_designer")
                , "Sample Template");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label_value_template_1_1_1_total_required")
                .setTips("This is important to know.")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("83.33333333333333em")
                .setCaption("1.1.1  What is the total required?")
                .setHAlign("left")
                .setVAlign("middle")
                , "Sample Template");
            
            host.xui_ui_tabs112.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout_sample_designer")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "min":130,
                        "size":80,
                        "locked":false,
                        "folded":true,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":550
                    }
                ])
                .setLeft("40em")
                .setTop("3em")
                .setWidth("42.5em")
                .setHeight("45.833333333333336em")
                , "Sample Designer");
            
            host.xui_ui_layout_sample_designer.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_group_sample_designer_summary")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("115.83333333333333em")
                , "before");
            
            host.xui_ui_group_sample_designer_summary.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label_value_summary_total")
                .setLeft("14.166666666666666em")
                .setTop("7.5em")
                .setWidth("8.333333333333334em")
                .setCaption("?")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#85CD4D"
                    }
                })
                );
            
            host.xui_ui_group_sample_designer_summary.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label_value_summary_total_required")
                .setLeft("14.166666666666666em")
                .setTop("5.416666666666667em")
                .setWidth("8.333333333333334em")
                .setCaption("?")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#1E90FF"
                    }
                })
                );
            
            host.xui_ui_group_sample_designer_summary.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3159")
                .setLeft("8.333333333333334em")
                .setTop("5.416666666666667em")
                .setWidth("5.416666666666667em")
                .setCaption("Required")
                .setVAlign("middle")
                );
            
            host.xui_ui_group_sample_designer_summary.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3160")
                .setLeft("8.333333333333334em")
                .setTop("7.5em")
                .setWidth("5.416666666666667em")
                .setCaption("Designed")
                .setVAlign("middle")
                );
            
            host.xui_ui_group_sample_designer_summary.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3161")
                .setLeft("14.166666666666666em")
                .setTop("3.75em")
                .setWidth("8.333333333333334em")
                .setCaption("Required")
                .setHAlign("center")
                .setVAlign("middle")
                );
            
            host.xui_ui_group_sample_designer_summary.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3162")
                .setLeft("14.166666666666666em")
                .setTop("0.8333333333333334em")
                .setWidth("8.333333333333334em")
                .setCaption("Total")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                );
            
            host.xui_ui_layout_sample_designer.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_labl_scale_ces_mb")
                .setItems([
                    {
                        "id":"Network Tab",
                        "caption":"TennisApp Home",
                        "image":""
                    },
                    {
                        "id":"Tennis Opponent Tab",
                        "caption":"TennisApp Opponent",
                        "image":""
                    },
                    {
                        "id":"Tennis Point Tab",
                        "caption":"TennisApp Point",
                        "image":""
                    },
                    {
                        "id":"Tennis Set Tab",
                        "caption":"TennisApp Analysis",
                        "image":""
                    }
                ])
                .setLeft("37.5em")
                .setTop("2.1666666666666665em")
                .setWidth("44.166666666666664em")
                .setHeight("500em")
                .setTabindex(0)
                .setValue("Tennis Set Tab")
                , "main");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_det_label_mname")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("13.5em")
                .setHeight("1.8333333333333333em")
                .setCaption("Match/Tournament Name")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labl_scale_ces_jsonRead")
                .setLeft("51.666666666666664em")
                .setTop("3.3333333333333335em")
                .setVisibility("hidden")
                .setCaption("no")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_det_dpicker_mdate")
                .setLeft("0em")
                .setTop("6.666666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Match Date")
                .setType("date")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_det_tpicker_stime")
                .setLeft("0em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Starting time:")
                .setType("time")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_det_tpicker_etime")
                .setLeft("18.333333333333332em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Ending time:")
                .setType("time")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_det_comboinput_location")
                .setLeft("0em")
                .setTop("13.333333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Location:")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"ten_det_radiobox_surface")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Hard",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Grass",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"Clay",
                        "imageClass":"xui-icon-number3"
                    }
                ])
                .setLeft("7.5em")
                .setTop("16.416666666666668em")
                .setWidth("26.166666666666668em")
                .setHeight("3.75em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_det_label_surface")
                .setLeft("1em")
                .setTop("18.083333333333332em")
                .setWidth("6.666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Surface:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_det_comboinput_opponent")
                .setLeft("19.166666666666668em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Opponent Name:")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .onChange("_setDetails")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_opp_label_oppspecifics")
                .setLeft("0.8333333333333334em")
                .setTop("0.5em")
                .setWidth("10em")
                .setHeight("1.8333333333333333em")
                .setCaption("Opponent Specifics")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_opp_comboinput_mental")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Mental Attitude:")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Neutral",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Negative",
                        "imageClass":"xui-icon-number2"
                    }
                ])
                .setValue("Positive")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_rundown")
                .setLeft("16.666666666666668em")
                .setTop("6.666666666666667em")
                .setWidth("13.666666666666666em")
                .setCaption("Can run down most balls")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_opp_label_power")
                .setLeft("0.8333333333333334em")
                .setTop("10em")
                .setWidth("10em")
                .setHeight("1.8333333333333333em")
                .setCaption("Power:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_pforehand")
                .setLeft("11.666666666666666em")
                .setTop("10em")
                .setWidth("11.166666666666666em")
                .setCaption("Powerful forehand")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_pbackhand")
                .setLeft("23.333333333333332em")
                .setTop("10em")
                .setWidth("11.166666666666666em")
                .setCaption("Powerful backhand")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_pserve")
                .setLeft("35.833333333333336em")
                .setTop("10em")
                .setWidth("11.166666666666666em")
                .setCaption("Powerful serve")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_opp_label_consistency")
                .setLeft("0.8333333333333334em")
                .setTop("13.333333333333334em")
                .setWidth("10em")
                .setHeight("1.8333333333333333em")
                .setCaption("Consistency:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_cforehand")
                .setLeft("11.666666666666666em")
                .setTop("13.333333333333334em")
                .setWidth("11.166666666666666em")
                .setCaption("Consistent forehand")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_cbackhand")
                .setLeft("23.333333333333332em")
                .setTop("13.333333333333334em")
                .setWidth("13.666666666666666em")
                .setCaption("Consistent backhand")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_cserve")
                .setLeft("35.833333333333336em")
                .setTop("13.333333333333334em")
                .setWidth("11.166666666666666em")
                .setCaption("Consistent serve")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_opp_label_topspin")
                .setLeft("0.8333333333333334em")
                .setTop("16.333333333333332em")
                .setWidth("10em")
                .setHeight("1.8333333333333333em")
                .setCaption("Topspin:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_tforehand")
                .setLeft("11.666666666666666em")
                .setTop("16.333333333333332em")
                .setWidth("13.666666666666666em")
                .setCaption("Topspin-heavy forehand")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_tbackhand")
                .setLeft("25.833333333333332em")
                .setTop("16.333333333333332em")
                .setWidth("12.833333333333334em")
                .setCaption("Topspin-heavy forehand")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_opp_checkbox_tserve")
                .setLeft("39.916666666666664em")
                .setTop("16.333333333333332em")
                .setWidth("15.333333333333334em")
                .setCaption("Topspin-heavy serve")
                , "Tennis Opponent Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_gscore")
                .setLeft("37.5em")
                .setTop("3em")
                .setWidth("12.666666666666666em")
                .setHeight("1.8333333333333333em")
                .setCaption("Game Score")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ten_pt_block_shots")
                .setLeft("26em")
                .setTop("5.666666666666667em")
                .setHeight("6.333333333333333em")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ten_pt_block_winner")
                .setLeft("13.5em")
                .setTop("5.666666666666667em")
                .setHeight("6.333333333333333em")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_shots")
                .setLeft("27.5em")
                .setTop("8.833333333333334em")
                .setWidth("7.5em")
                .setHeight("1.8333333333333333em")
                .setCaption("shots")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_winner")
                .setLeft("15em")
                .setTop("6.333333333333333em")
                .setWidth("7.5em")
                .setHeight("1.8333333333333333em")
                .setCaption("Winner")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_wp")
                .setLeft("14.166666666666666em")
                .setTop("8.833333333333334em")
                .setWidth("2.9166666666666665em")
                .setCaption("P")
                .onClick("_playerWin")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_wo")
                .setLeft("18.333333333333332em")
                .setTop("8.833333333333334em")
                .setWidth("2.9166666666666665em")
                .setCaption("O")
                .onClick("_opponentWin")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_set_label_")
                .setLeft("1.6666666666666667em")
                .setTop("5.5em")
                .setWidth("4.166666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Winners")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_oppcgs")
                .setLeft("27.416666666666668em")
                .setTop("33.916666666666664em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"15",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"30",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"40",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"e",
                        "caption":"AD",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"f",
                        "caption":"-",
                        "imageClass":"xui-icon-number6"
                    }
                ])
                .onChange("_setgscore")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_cgs")
                .setLeft("12.416666666666666em")
                .setTop("34.083333333333336em")
                .setWidth("10.833333333333334em")
                .setHeight("1.8333333333333333em")
                .setCaption("Current Game Score:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_submit")
                .setLeft("34.333333333333336em")
                .setTop("27.333333333333332em")
                .setWidth("10.416666666666666em")
                .setHeight("2.5em")
                .setCaption("Submit")
                .onClick("_submitButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_server")
                .setLeft("5em")
                .setTop("2.1666666666666665em")
                .setWidth("7.5em")
                .setHeight("1.8333333333333333em")
                .setCaption("Server")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_a")
                .setLeft("7.5em")
                .setTop("13em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setCaption("A")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"ten_pt_button_thetee",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties",
                        "event":1
                    },
                    {
                        "desc":"Action 2",
                        "type":"control",
                        "target":"ten_pt_button_middle",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"Action 3",
                        "type":"control",
                        "target":"ten_pt_button_outwide",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    "_aceButton"
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_f")
                .setLeft("17.666666666666668em")
                .setTop("17.416666666666668em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("F")
                .onClick("_forehandButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_b")
                .setLeft("27.666666666666668em")
                .setTop("17.25em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("B")
                .onClick("_backhandButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_df")
                .setLeft("14.166666666666666em")
                .setTop("13.25em")
                .setWidth("3.75em")
                .setHeight("2.8333333333333335em")
                .setCaption("DF")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"ten_pt_button_n",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties",
                        "event":1
                    },
                    {
                        "desc":"Action 2",
                        "type":"control",
                        "target":"ten_pt_button_wide",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"Action 3",
                        "type":"control",
                        "target":"ten_pt_button_l",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    "_doubleFaultButton"
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_g")
                .setLeft("10em")
                .setTop("21.333333333333332em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("G")
                .onClick("_groundstrokeButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_sv")
                .setLeft("22.5em")
                .setTop("21.333333333333332em")
                .setWidth("3.75em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("SV")
                .onClick("_swingingVolleyButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_sl")
                .setLeft("15.833333333333334em")
                .setTop("21.333333333333332em")
                .setWidth("3.75em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("SL")
                .onClick("_sliceButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_o")
                .setLeft("35em")
                .setTop("21.333333333333332em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("O")
                .onClick("_overheadButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_v")
                .setLeft("29.166666666666668em")
                .setTop("21.333333333333332em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("V")
                .onClick("_volleyButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_w")
                .setLeft("36.666666666666664em")
                .setTop("13em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setCaption("W")
                .onClick([
                    {
                        "desc":"downtheline",
                        "type":"control",
                        "target":"ten_pt_button_downtheline",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties",
                        "event":1
                    },
                    {
                        "desc":"crosscourt",
                        "type":"control",
                        "target":"ten_pt_button_crosscourt",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"downthemiddle",
                        "type":"control",
                        "target":"ten_pt_button_downthemiddle",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"g",
                        "type":"control",
                        "target":"ten_pt_button_g",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"sl",
                        "type":"control",
                        "target":"ten_pt_button_sl",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"sv",
                        "type":"control",
                        "target":"ten_pt_button_sv",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"v",
                        "type":"control",
                        "target":"ten_pt_button_v",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"o",
                        "type":"control",
                        "target":"ten_pt_button_o",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"f",
                        "type":"control",
                        "target":"ten_pt_button_f",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ten_pt_button_b",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    "_winnerButton"
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_fe")
                .setLeft("29.166666666666668em")
                .setTop("13em")
                .setWidth("3.75em")
                .setHeight("2.8333333333333335em")
                .setCaption("FE")
                .onClick([
                    {
                        "desc":"n",
                        "type":"control",
                        "target":"ten_pt_button_n",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties",
                        "event":1
                    },
                    {
                        "desc":"wide",
                        "type":"control",
                        "target":"ten_pt_button_wide",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"l",
                        "type":"control",
                        "target":"ten_pt_button_l",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"g",
                        "type":"control",
                        "target":"ten_pt_button_g",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"sl",
                        "type":"control",
                        "target":"ten_pt_button_sl",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"sv",
                        "type":"control",
                        "target":"ten_pt_button_sv",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"v",
                        "type":"control",
                        "target":"ten_pt_button_v",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"o",
                        "type":"control",
                        "target":"ten_pt_button_o",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"f",
                        "type":"control",
                        "target":"ten_pt_button_f",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ten_pt_button_b",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    "_forcedErrorButton"
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_e")
                .setLeft("22.5em")
                .setTop("13.333333333333334em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setCaption("E")
                .onClick([
                    {
                        "desc":"n",
                        "type":"control",
                        "target":"ten_pt_button_n",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties",
                        "event":1
                    },
                    {
                        "desc":"wide",
                        "type":"control",
                        "target":"ten_pt_button_wide",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"l",
                        "type":"control",
                        "target":"ten_pt_button_l",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"g",
                        "type":"control",
                        "target":"ten_pt_button_g",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"sl",
                        "type":"control",
                        "target":"ten_pt_button_sl",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"sv",
                        "type":"control",
                        "target":"ten_pt_button_sv",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"v",
                        "type":"control",
                        "target":"ten_pt_button_v",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"o",
                        "type":"control",
                        "target":"ten_pt_button_o",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"f",
                        "type":"control",
                        "target":"ten_pt_button_f",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ten_pt_button_b",
                        "args":[
                            {
                                "visibility":"visible"
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    "_errorButton"
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_n")
                .setLeft("12.666666666666666em")
                .setTop("25.583333333333332em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("N")
                .onClick("_netErrorButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_wide")
                .setLeft("17.666666666666668em")
                .setTop("25.833333333333332em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("W")
                .onClick("_wideButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_l")
                .setLeft("24.916666666666668em")
                .setTop("25.75em")
                .setWidth("2.9166666666666665em")
                .setHeight("2.8333333333333335em")
                .setVisibility("hidden")
                .setCaption("L")
                .onClick("_longButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_outwide")
                .setLeft("44.333333333333336em")
                .setTop("21.416666666666668em")
                .setWidth("7.916666666666667em")
                .setHeight("3.6666666666666665em")
                .setVisibility("hidden")
                .setCaption("Out wide")
                .onClick("_outWideButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_middle")
                .setLeft("44.166666666666664em")
                .setTop("16.333333333333332em")
                .setWidth("7.916666666666667em")
                .setHeight("3.6666666666666665em")
                .setVisibility("hidden")
                .setCaption("Down the middle")
                .onClick("_theMiddleButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_thetee")
                .setLeft("44.333333333333336em")
                .setTop("11.416666666666666em")
                .setWidth("7.916666666666667em")
                .setHeight("3.6666666666666665em")
                .setVisibility("hidden")
                .setCaption("Down the tee")
                .onClick("_theTeeButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_downtheline")
                .setLeft("57.5em")
                .setTop("10.833333333333334em")
                .setWidth("7.916666666666667em")
                .setHeight("3.6666666666666665em")
                .setVisibility("hidden")
                .setCaption("Down the line")
                .onClick("_theLineButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_crosscourt")
                .setLeft("56.833333333333336em")
                .setTop("20.583333333333332em")
                .setWidth("7.916666666666667em")
                .setHeight("3.6666666666666665em")
                .setVisibility("hidden")
                .setCaption("Crosscourt")
                .onClick("_crosscourtButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_downthemiddle")
                .setLeft("57.666666666666664em")
                .setTop("15.583333333333334em")
                .setWidth("7.916666666666667em")
                .setHeight("3.6666666666666665em")
                .setVisibility("hidden")
                .setCaption("Down the middle")
                .onClick("_downTheMiddleButton")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1613")
                .setLeft("6.666666666666667em")
                .setTop("5.75em")
                .setWidth("6.666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Forced Errors")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1614")
                .setLeft("14.166666666666666em")
                .setTop("5.5em")
                .setWidth("7.5em")
                .setHeight("1.8333333333333333em")
                .setCaption("Unforced Errors")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_ana_label_you")
                .setLeft("1.6666666666666667em")
                .setTop("0.5em")
                .setWidth("18.333333333333332em")
                .setHeight("1.8333333333333333em")
                .setCaption("You")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_ana_label_opp")
                .setLeft("33.333333333333336em")
                .setTop("0.5em")
                .setWidth("19.166666666666668em")
                .setHeight("1.8333333333333333em")
                .setCaption("Opponent")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1617")
                .setLeft("33.333333333333336em")
                .setTop("5.5em")
                .setWidth("6.666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Unforced Errors")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1618")
                .setLeft("48.333333333333336em")
                .setTop("5.5em")
                .setWidth("4.166666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Winners")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1619")
                .setLeft("40.833333333333336em")
                .setTop("5.5em")
                .setWidth("6.666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Forced Errors")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1621")
                .setLeft("1.6666666666666667em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("FH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1622")
                .setLeft("6.666666666666667em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("FH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1623")
                .setLeft("14.166666666666666em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("FH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1624")
                .setLeft("48.333333333333336em")
                .setTop("3.25em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("FH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1625")
                .setLeft("40.833333333333336em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("FH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1626")
                .setLeft("33.333333333333336em")
                .setTop("3.25em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("FH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1627")
                .setLeft("4.166666666666667em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("BH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1628")
                .setLeft("37.5em")
                .setTop("3em")
                .setWidth("1.8333333333333333em")
                .setHeight("1.8333333333333333em")
                .setCaption("BH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1629")
                .setLeft("10em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("BH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1631")
                .setLeft("19.166666666666668em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("BH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1632")
                .setLeft("45.833333333333336em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("BH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1633")
                .setLeft("50.833333333333336em")
                .setTop("3em")
                .setWidth("1.6666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("BH")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1634")
                .setLeft("23.333333333333332em")
                .setTop("8em")
                .setWidth("9.166666666666666em")
                .setHeight("2.6666666666666665em")
                .setCaption("Groundstroke")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1635")
                .setLeft("23.333333333333332em")
                .setTop("11.583333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.4166666666666665em")
                .setCaption("Slice")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1636")
                .setLeft("23.333333333333332em")
                .setTop("15.5em")
                .setWidth("9.166666666666666em")
                .setHeight("2.6666666666666665em")
                .setCaption("Swinging Volley")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1637")
                .setLeft("23.333333333333332em")
                .setTop("23.833333333333332em")
                .setWidth("9.166666666666666em")
                .setHeight("2.6666666666666665em")
                .setCaption("Volley")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1638")
                .setLeft("23.333333333333332em")
                .setTop("19.666666666666668em")
                .setWidth("9.166666666666666em")
                .setHeight("2.6666666666666665em")
                .setCaption("Overhead")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block123")
                .setLeft("1.6666666666666667em")
                .setTop("8em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block124")
                .setLeft("7.5em")
                .setTop("8em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block125")
                .setLeft("14.166666666666666em")
                .setTop("8em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block127")
                .setLeft("33.333333333333336em")
                .setTop("8em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block128")
                .setLeft("7.5em")
                .setTop("15.5em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block129")
                .setLeft("7.5em")
                .setTop("11.333333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block130")
                .setLeft("7.5em")
                .setTop("19.666666666666668em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block131")
                .setLeft("7.5em")
                .setTop("23.833333333333332em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block132")
                .setLeft("1.6666666666666667em")
                .setTop("11.583333333333334em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block133")
                .setLeft("1.6666666666666667em")
                .setTop("14.916666666666666em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block134")
                .setLeft("1.6666666666666667em")
                .setTop("19.916666666666668em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block135")
                .setLeft("1.6666666666666667em")
                .setTop("24.083333333333332em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block136")
                .setLeft("14.166666666666666em")
                .setTop("11.583333333333334em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block137")
                .setLeft("14.166666666666666em")
                .setTop("15.75em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block138")
                .setLeft("14.166666666666666em")
                .setTop("19.916666666666668em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block139")
                .setLeft("14.166666666666666em")
                .setTop("24.083333333333332em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block140")
                .setLeft("4.166666666666667em")
                .setTop("8em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block141")
                .setLeft("10.833333333333334em")
                .setTop("8.25em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block142")
                .setLeft("10.833333333333334em")
                .setTop("11.583333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block143")
                .setLeft("10.833333333333334em")
                .setTop("15.5em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block144")
                .setLeft("10.833333333333334em")
                .setTop("19.916666666666668em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block145")
                .setLeft("10.833333333333334em")
                .setTop("24.083333333333332em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block146")
                .setLeft("4.166666666666667em")
                .setTop("11.583333333333334em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block147")
                .setLeft("4.166666666666667em")
                .setTop("14.916666666666666em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block151")
                .setLeft("4.166666666666667em")
                .setTop("19.916666666666668em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block152")
                .setLeft("4.166666666666667em")
                .setTop("24.083333333333332em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block153")
                .setLeft("18.333333333333332em")
                .setTop("8.25em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block154")
                .setLeft("18.333333333333332em")
                .setTop("11.583333333333334em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block155")
                .setLeft("18.333333333333332em")
                .setTop("15.75em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block156")
                .setLeft("18.333333333333332em")
                .setTop("19.916666666666668em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block157")
                .setLeft("18.333333333333332em")
                .setTop("23.833333333333332em")
                .setWidth("3.3333333333333335em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block158")
                .setLeft("36.666666666666664em")
                .setTop("8em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block159")
                .setLeft("33.333333333333336em")
                .setTop("11.583333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block160")
                .setLeft("36.666666666666664em")
                .setTop("11.583333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block161")
                .setLeft("36.666666666666664em")
                .setTop("15.75em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block165")
                .setLeft("33.333333333333336em")
                .setTop("15.75em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block166")
                .setLeft("33.333333333333336em")
                .setTop("19.916666666666668em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block167")
                .setLeft("36.666666666666664em")
                .setTop("19.916666666666668em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block168")
                .setLeft("36.666666666666664em")
                .setTop("24.083333333333332em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block169")
                .setLeft("33.333333333333336em")
                .setTop("24.083333333333332em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block170")
                .setLeft("40.833333333333336em")
                .setTop("8.25em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block171")
                .setLeft("44.166666666666664em")
                .setTop("8.25em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block172")
                .setLeft("44.166666666666664em")
                .setTop("11.583333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block173")
                .setLeft("40.833333333333336em")
                .setTop("11.583333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block174")
                .setLeft("44.166666666666664em")
                .setTop("15.75em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block175")
                .setLeft("40.833333333333336em")
                .setTop("15.75em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block176")
                .setLeft("40.833333333333336em")
                .setTop("19.916666666666668em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block177")
                .setLeft("44.166666666666664em")
                .setTop("19.916666666666668em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block178")
                .setLeft("44.166666666666664em")
                .setTop("24.083333333333332em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block179")
                .setLeft("40.833333333333336em")
                .setTop("24.083333333333332em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block180")
                .setLeft("48.333333333333336em")
                .setTop("8.25em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block181")
                .setLeft("50.833333333333336em")
                .setTop("8.25em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block182")
                .setLeft("50.833333333333336em")
                .setTop("11.583333333333334em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block183")
                .setLeft("48.333333333333336em")
                .setTop("11.583333333333334em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block184")
                .setLeft("48.333333333333336em")
                .setTop("15.75em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block185")
                .setLeft("50.833333333333336em")
                .setTop("15.75em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block186")
                .setLeft("50.833333333333336em")
                .setTop("19.916666666666668em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block187")
                .setLeft("48.333333333333336em")
                .setTop("19.916666666666668em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block188")
                .setLeft("48.333333333333336em")
                .setTop("24.083333333333332em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block189")
                .setLeft("50.833333333333336em")
                .setTop("24.083333333333332em")
                .setWidth("1.6666666666666667em")
                .setHeight("2.5em")
                , "Tennis Set Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_youcgs")
                .setLeft("17.416666666666668em")
                .setTop("33.916666666666664em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"15",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"30",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"40",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"e",
                        "caption":"AD",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"f",
                        "caption":"-",
                        "imageClass":"xui-icon-number6"
                    }
                ])
                .onChange("_setgscore")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_ssscore")
                .setLeft("21.666666666666668em")
                .setTop("2.1666666666666665em")
                .setWidth("9.5em")
                .setHeight("1.8333333333333333em")
                .setCaption("Set Score")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_opp")
                .setLeft("35.75em")
                .setTop("31.333333333333332em")
                .setWidth("8.833333333333334em")
                .setHeight("1.8333333333333333em")
                .setCaption("Opp")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_you")
                .setLeft("24.916666666666668em")
                .setTop("31.333333333333332em")
                .setWidth("8.416666666666666em")
                .setHeight("1.8333333333333333em")
                .setCaption("You")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_css")
                .setLeft("12.416666666666666em")
                .setTop("36.583333333333336em")
                .setWidth("10.833333333333334em")
                .setHeight("1.8333333333333333em")
                .setCaption("Current Set Score:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_oppcss")
                .setLeft("27.666666666666668em")
                .setTop("36.416666666666664em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"1",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"2",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"3",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"e",
                        "caption":"4",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"f",
                        "caption":"5",
                        "imageClass":"xui-icon-number6"
                    },
                    {
                        "id":"g",
                        "caption":"6",
                        "imageClass":"xui-icon-number7"
                    },
                    {
                        "id":"h",
                        "caption":"7",
                        "imageClass":"xui-icon-number8"
                    }
                ])
                .onChange("_setcss")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_cms")
                .setLeft("12.5em")
                .setTop("39.916666666666664em")
                .setWidth("10.833333333333334em")
                .setHeight("1.8333333333333333em")
                .setCaption("Current Match Score:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_youcms")
                .setLeft("17.416666666666668em")
                .setTop("39.75em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"1",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"2",
                        "imageClass":"xui-icon-number3"
                    }
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_oppcms")
                .setLeft("27.416666666666668em")
                .setTop("39.916666666666664em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"1",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"2",
                        "imageClass":"xui-icon-number3"
                    }
                ])
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_det_comboinput_playername")
                .setLeft("0em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Player Name:")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .onChange("_setDetails")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_pt_checkbox_tiebreak")
                .setLeft("42.666666666666664em")
                .setTop("33.916666666666664em")
                .setWidth("12em")
                .setCaption("Tiebreak")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_youcss")
                .setLeft("17.666666666666668em")
                .setTop("36.416666666666664em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"1",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"2",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"3",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"e",
                        "caption":"4",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"f",
                        "caption":"5",
                        "imageClass":"xui-icon-number6"
                    },
                    {
                        "id":"g",
                        "caption":"6",
                        "imageClass":"xui-icon-number7"
                    },
                    {
                        "id":"h",
                        "caption":"7",
                        "imageClass":"xui-icon-number8"
                    }
                ])
                .onChange("_setcss")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_pt_button_setscore")
                .setLeft("24.333333333333332em")
                .setTop("43.166666666666664em")
                .setWidth("9.416666666666666em")
                .setCaption("Set Score")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ten_pt_comboinput_numshots")
                .setLeft("20.166666666666668em")
                .setTop("6.5em")
                .setWidth("13.833333333333334em")
                .setLabelSize("8em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"0",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"15",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"30",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"40",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"e",
                        "caption":"AD",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"f",
                        "caption":"-",
                        "imageClass":"xui-icon-number6"
                    }
                ])
                .onChange("_setgscore")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ten_pt_checkbox_secondserve")
                .setLeft("39.166666666666664em")
                .setTop("6.666666666666667em")
                .setWidth("12em")
                .setCaption("Second Serve")
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_points")
                .setLeft("5.25em")
                .setTop("51.5em")
                .setWidth("26.666666666666668em")
                .setHeight("11em")
                .setCaption("")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_pt_label_points2")
                .setLeft("6.083333333333333em")
                .setTop("66.5em")
                .setWidth("26.666666666666668em")
                .setHeight("11em")
                .setCaption("")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Tennis Point Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ten_det_label_firstserver")
                .setLeft("1em")
                .setTop("23.916666666666668em")
                .setWidth("6.666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("First Server:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_det_button_pserve")
                .setLeft("9.333333333333334em")
                .setTop("23.916666666666668em")
                .setWidth("5.75em")
                .setHeight("2.5em")
                .setCaption("Player")
                .onClick("_firstServer")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ten_det_button_oserve")
                .setLeft("16.833333333333332em")
                .setTop("23.916666666666668em")
                .setWidth("10.75em")
                .setHeight("2.5em")
                .setCaption("Opponent")
                .onClick("_firstServer")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Indoor",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Outdoor",
                        "imageClass":"xui-icon-number2"
                    }
                ])
                .setLeft("17.666666666666668em")
                .setTop("11.416666666666666em")
                .setWidth("17.666666666666668em")
                .setHeight("4.166666666666667em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label334")
                .setLeft("1em")
                .setTop("21.416666666666668em")
                .setWidth("6.666666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("Conditions:")
                .setHAlign("left")
                .setVAlign("bottom")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "background-color":"#696969"
                    }
                })
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox61")
                .setLeft("9.333333333333334em")
                .setTop("21.416666666666668em")
                .setWidth("4.5em")
                .setCaption("Hot")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox62")
                .setLeft("24.333333333333332em")
                .setTop("21.416666666666668em")
                .setWidth("4.5em")
                .setCaption("Cool")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox63")
                .setLeft("19.416666666666668em")
                .setTop("21.416666666666668em")
                .setWidth("6.083333333333333em")
                .setCaption("Sunny")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox64")
                .setLeft("14.333333333333334em")
                .setTop("21.416666666666668em")
                .setWidth("4.5em")
                .setCaption("Cool")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox65")
                .setLeft("36em")
                .setTop("21.416666666666668em")
                .setWidth("4.5em")
                .setCaption("Wet")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox66")
                .setLeft("30.25em")
                .setTop("21.416666666666668em")
                .setWidth("6.083333333333333em")
                .setCaption("Windy")
                , "Network Tab");
            
            host.xui_ui_labl_scale_ces_mb.append(
                xui.create("xui.UI.Slider")
                .setHost(host,"xui_ui_slider1")
                .setLeft("1em")
                .setTop("5.583333333333333em")
                .setIsRange(false)
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Speed")
                .setLabelHAlign("left")
                .setValue("0")
                , "Tennis Opponent Tab");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label498")
                .setLeft("5em")
                .setTop("1.6666666666666667em")
                .setWidth("46.666666666666664em")
                .setCaption("Bootstrap Project to help onboard Developers.")
                .setHAlign("left")
                , "before");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label_warnings")
                .setLeft("57.5em")
                .setTop("-2.5em")
                .setWidth("4.166666666666667em")
                .setCaption("?")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#FFF959"
                    }
                })
                , "after");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label_errors")
                .setLeft("45.833333333333336em")
                .setTop("-8.333333333333334em")
                .setWidth("4.166666666666667em")
                .setCaption("?")
                .setHAlign("center")
                .setVAlign("middle")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#FF756E"
                    }
                })
                , "after");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1670")
                .setLeft("51.666666666666664em")
                .setTop("-4.166666666666667em")
                .setWidth("5em")
                .setCaption("Warnings")
                .setVAlign("middle")
                , "after");
            
            host.xui_ui_layout_help.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1671")
                .setLeft("44.166666666666664em")
                .setTop("-5.833333333333333em")
                .setWidth("4.166666666666667em")
                .setCaption("Errors")
                .setVAlign("middle")
                , "after");
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },


        ////////////////////////////////////////////////////////////////////
        //   FUNCTIONS
        ////////////////////////////////////////////////////////////////////

        _onready:function(){
            SPA=this;   
        },


        _onrender:function(){
            var ns=this;

            //inlcude 3rd party libraries

            //PDF
            xui.include("jsPDF","https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js");

            //load json data tables
            //                    SPA._refresh_sample_tables();
            //                    
            //initialize using default values
            SPA._refresh_sample_designer();
        },



        _refresh_sample_tables:function(){
            SPA._refresh_sample_table();
        },


        //
        // Call to loop to validate
        // 
        _refresh_sample_designer:function(){


            SPA._validate();
        },



        _calculate_sample_designer_row_total:function(combo_one, combo_two){
            var combo_two_result = 0;
            switch(combo_two){
                case "Slow": 
                    combo_two_result = 1;
                    break;
                case "Fast": 
                    combo_two_result = 2;
                    break;
                case "Very Fast": 
                    combo_two_result = 3;
                    break;
                case "Super Duper Fast": 
                    combo_two_result = 4;
                    break;
                default: 

            }

            return combo_one * combo_two_result;
        },


        _refresh_sample_table:function(){
            var ns = this;
            xui.Ajax("json/rev2site.json","",function(rsp){
                var data = rsp;
                if(!data)alert("no data");
                else{
                    if(data.header)
                        ns.sample_table.setHeader(data.header);
                    if(data.rows)
                        ns.sample_table.setRows(data.rows);
                }
            }).start();
        },


        _firstServer:function(){
            var tempVal;
            tempVal = this.ten_det_comboinput_playername.getUIValue();
            this.ten_pt_label_server.setCaption(tempVal + "'s Serve");
            
            tempVal = this.ten_det_comboinput_opponent.getUIValue();
            this.ten_pt_label_server.setCaption(tempVal + "'s Serve");
        },
        
        _setDetails:function() {
            var tempVal;

            tempVal = this.ten_det_comboinput_playername.getUIValue();
            this.ten_pt_label_you.setCaption(tempVal);
            this.ten_ana_label_you.setCaption(tempVal);
            this.ten_det_button_pserve.setCaption(tempVal);

            tempVal = this.ten_det_comboinput_opponent.getUIValue();
            this.ten_pt_label_opp.setCaption(tempVal);
            this.ten_opp_label_oppspecifics.setCaption(tempVal + "'s Specifics");
            this.ten_ana_label_opp.setCaption(tempVal);
            this.ten_det_button_oserve.setCaption(tempVal);
        },

        _setgscore:function() {
            var yougscore;

            yougscore = this.ten_pt_comboinput_youcgs.getUIValue();

            var oppgscore;

            oppgscore = this.ten_pt_comboinput_oppcgs.getUIValue();

            this.ten_pt_label_gscore.setCaption("Game score:" + yougscore + "-" + oppgscore);  
        },

        _setcss:function() {

            var yousscore;

            yousscore = this.ten_pt_comboinput_youcss.getUIValue();
            var oppsscore;

            oppsscore = this.ten_pt_comboinput_oppcss.getUIValue();



            this.ten_pt_label_ssscore.setCaption("Set score:" + yousscore + "-" + oppsscore);

        },
        
        _playerWin:function(playerWin) {
            var playerWin = "Player Won";
            this._createPoint2(playerWin);
        },
        
        _opponentWin:function(opponentWin){
            var opponentWin = "Opponent Won";
            this._createPoint2(opponentWin);
        },



        _aceButton:function(ace) {
            var ace = "Ace";
            this._createPoint(ace);
        },


        _doubleFaultButton:function(doubleFault) {
            var doubleFault = "Double Fault";
            this._createPoint(doubleFault);
        },


        _errorButton:function(error){
            var error = "Error";
            this._createPoint(error);
        },

        _forcedErrorButton:function(forcedError){
            var forcedError = "Forced Error";
            this._createPoint(forcedError);
        },

        _winnerButton:function(winner){
            var winner = "Winner";
            this._createPoint(winner);
        },

        _netErrorButton:function(netError){
            var netError = "Net Error";
            this._createPoint(netError);
        },

        _wideButton:function(wideError){
            var wideError = "Wide Error";
            this._createPoint(wideError);
        },

        _longButton:function(longError){
            var longError = "Long Error";
            this._createPoint(longError);
        },

        _groundstrokeButton:function(groundstroke){
            var groundstroke = "Groundstroke";
            this._createPoint(groundstroke);
        },

        _sliceButton:function(slice){
            var slice = "Slice";
            this._createPoint(slice);
        },

        _swingingVolleyButton:function(swingingVolley){
            var swingingVolley = "Swinging Volley";
            this._createPoint(swingingVolley);
        },



        _volleyButton:function(volley){
            var volley = "Volley";
            this._createPoint(volley);
        },

        _overheadButton:function(overhead){
            var overhead = "Overhead";
            this._createPoint(overhead);
        },


        _forehandButton:function(forehand){
            var forehand = "Forehand";
            this._createPoint(forehand);
        },

        _backhandButton:function(backhand){
            var backhand = "Backhand";
            this._createPoint(backhand);
        },


        _theTeeButton:function(theTee){
            var theTee = "The Tee";
            this._createPoint(theTee);
        },

        _theMiddleButton:function(theMiddle){
            var theMiddle = "The Middle";
            this._createPoint(theMiddle);
        },

        _outWideButton:function(outWide){
            var outWide = "Out Wide";
            this._createPoint(outWide);
        },

        _downTheMiddleButton:function(downTheMiddle){
            var downTheMiddle = "Down the middle";
            this._createPoint(downTheMiddle);
        },

        _crosscourtButton:function(crosscourt){
            var crosscourt = "Crosscourt";
            this._createPoint(crosscourt);
        },

        _theLineButton:function(downTheLine){
            var downTheLine = "Down the line";
            this._createPoint(downTheLine);
        },
        
        _submitButton:function(submit){
            var submit = "/";
            this._createPoint(submit)
        },
        
        _createPoint2:function(ptValue){
            var ptStream;
            ptStream = this.ten_pt_label_points.getCaption();
            ptStream = ptStream + ptValue
            this.ten_pt_label_points.setCaption(ptStream);
        },

        _createPoint:function(ptValue){    
            var ptStream;
            ptStream = this.ten_pt_label_points.getCaption();
            ptStream = ptStream + ", " + ptValue;
            this.ten_pt_label_points.setCaption(ptStream);
        },

        
        _validate:function() {
            var warnings = 0;
            var errors = 0;
            var warnings_errors_log = "";
            var tempStr;

            //update summary values
            this.xui_ui_label_value_summary_total_required.setCaption(this.xui_ui_combo_template_1_1_1_total_required.getCaption());

            //reset all conditions to green
            this.xui_ui_label_value_summary_total.setCustomStyle({"KEY" : {"background-color" : "#85CD4D"}});

            //warnings
            if(Number(this.xui_ui_label_value_summary_total.getCaption()) < Number(this.xui_ui_label_value_summary_total_required.getCaption())){
                this.xui_ui_label_value_summary_total.setCustomStyle({"KEY" : {"background-color" : "#FFF959"}});
                warnings = warnings + 1;
            }

            //errors
            if ( this.xui_ui_inpt_scale_ces_smbCon.getUIValue() > 20000) {
                tempStr = "Exceeded ces smb connections of 20000 with:" + this.xui_ui_inpt_scale_ces_smbCon.getUIValue();
                alert(tempStr);
                errors += 1;
            }

            if ( this.xui_ui_inpt_scale_ces_nfsCon.getUIValue() > 84000) {
                tempStr ="Exceeded ces nfs connections of 84000 with: " + this.xui_ui_inpt_scale_ces_nfsCon.getUIValue();
                alert(tempStr);
                // $validation_log += $tempStr;
                errors += 1;
            }

            if (this.xui_ui_inpt_scale_ces_nodesTot.getUIValue() > 16) {
                errors += 1;
                tempStr = "Exceeded max ces nodes of 16 with:" + this.xui_ui_inpt_scale_ces_nodesTot.getUIValue();
                alert(tempStr);
            }


            //update footer
            this.xui_ui_label_warnings.setCaption(warnings);
            this.xui_ui_label_errors.setCaption(errors);
        },

        _refresh_spectrum_network:function(){
            // Enabling and Disabling network interfaces depending on Input values
            //







        },

        _refresh_selected_tab_top_level:function(profile, item, src){
            switch(item.id){
                case "Sample Designer": 
                    //          this.xui_ui_group_sample_designer_summary.refresh();
                    break;
                case "Sample Report": 
                    SPA._sample_report_PDF();
                    break;
                case "Sample JSON": 
                    SPA._export_JSON();
                    break;
                default: 

            }
        },



        _xui_ui_toolbar_sample_report_onclick:function(profile,item,group,e,src){
            var ns = this, uictrl = profile.boxing();

            if (item.id) {
                SPA._sample_report_PDF();

            }
        },



        _sample_report_PDF:function(){
            var doc = new jsPDF({orientation: 'portrait'});
            var vertical_offset = 0;

            doc.setFontSize(10);
            vertical_offset = 35;
            doc.setFillColor(30,144,255);
            doc.setLineWidth(0.1);
            doc.setDrawColor(0);
            doc.rect(10, vertical_offset -3, 190, 4, 'F');
            doc.setTextColor(255,255,255);
            doc.text ("Sample Report", 12, vertical_offset);

            vertical_offset = vertical_offset + 10;
            doc.setTextColor(0,0,0);
            doc.setFontSize(10);
            // doc.text("Required: ", 10, vertical_offset);
            // doc.text(this.xui_ui_label_value_summary_total_required.getCaption(), 40, vertical_offset);


            this.xui_ui_div_sample_report_pdf_container.setIframeAutoLoad(doc.output('datauristring'));
        },



        _clear_json_editor:function(){
            this.xui_ui_input_project_file.setUIValue("");
        },


        _save_JSON_to_disk:function(){
            SPA._export_JSON();
            var exporttext = SPA._create_export_text();
            var blob = new Blob([exporttext], {type: 'text/csv'});
            if(window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, "filenamehere");
            }else{
                var elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = "filenamehere";
                document.body.appendChild(elem);
                elem.click();
                document.body.removeChild(elem);
            }
        },



        _export_JSON:function(){
            var exporttext = SPA._create_export_text();
            this.xui_ui_input_project_file.setUIValue(exporttext);
        },



        _create_export_text:function(){
            var today = new Date();
            var exporttext = "{\n";
            exporttext = exporttext + " \"json_time_date_stamp\": \"" + today + "\",\n";
            exporttext = exporttext + " \"template_sample_1_1_1_total_required\": " + this.xui_ui_combo_template_1_1_1_total_required.getUIValue() + ",\n";
            exporttext = exporttext + " \"lastjsonfield\": \"\"\n";
            exporttext = exporttext + "}";
            return exporttext;
        },

        _readCESData:function() {
            var x;

            x = 45;

            return x;
        },

        _calc_protocol_config:function() {
            var totNodes=0, totFports=0, totBports=0, tstr;
            var nfs, smb, obj, i;
            var nfsConM, smbConM, objConM;
            var linkMax10g, linkMax40g, linkMax56g, linkMax100g, linkMaxIBaddr, linkMaxIBddr, linkMaxIBfdr, linkMaxIBedr;
            var fltype, flinks, bltype, blinks, ntype, nlinks;
            var smbMB, smbCon, smbOps, nfsMB, nfsCon, nfsOps, objMB, objCon, objOps;
            var reqBsmb, reqBnfs, reqBobj, maxSMBcon, maxCESnodes, maxBand=0, maxFBand=0;

            this._refresh_sample_designer();

            var testText = "C:/MP/Apps/CrossUI/fooJason.txt";
            alert(this.xui_ui_labl_scale_ces_jsonRead.getCaption());
            if (this.xui_ui_labl_scale_ces_jsonRead.getCaption() == "no") {


                var request = new XMLHttpRequest();
                request.open("GET", testText, false);
                request.send(null);

                var JSONcesData = JSON.parse(request.response);
                var zip = JSONcesData.Zip;



                alert(zip);

                this.xui_ui_labl_scale_ces_jsonRead.setCaption("yes");
            }
            //
            // Max values based on link
            // 1. Connections
            // 2. MegaBytes/sec is dependent on the storage (ESS)
            // 3. Ops is dependent on the ESS storage
            // //
            this._readCESData();

            nfsConM = 5000;
            smbConM = 3000;
            objConM = 2000;
            //
            // Max MegaBytes/sec
            // 
            linkMax10g = 1000;
            linkMax40g = 4200;
            linkMax56g = 5400;
            linkMax100g = 10000;
            linkMaxIBddr = 5000;
            linkMaxIBfdr = 10000;
            linkMaxIBedr = 20000;


            //
            // Max Ops capability dependent on backend storage
            // 

            totNodes = 2;

            fltype = this.xui_ui_cbox_scale_ces_fnetType.getCaption();
            flinks = this.xui_ui_cmbx_scale_ces_fnetLinks.getUIValue();
            bltype = this.xui_ui_cmbx_scale_ces_bnetType.getCaption();
            blinks = this.xui_ui_cmbx_scale_ces_bnetLinks.getUIValue();


            smbMB = this.xui_ui_inpt_scale_ces_smbMB.getUIValue();
            smbCon = this.xui_ui_inpt_scale_ces_smbCon.getUIValue();
            smbOps = this.xui_ui_inpt_scale_ces_smbOps.getUIValue();
            nfsMB = this.xui_ui_inpt_scale_ces_nfsMB.getUIValue();
            nfsCon = this.xui_ui_inpt_scale_ces_nfsCon.getUIValue();
            nfsOps = this.xui_ui_inpt_scale_ces_nfsOps.getUIValue();
            objMB = this.xui_ui_inpt_scale_ces_objMB.getUIValue();
            objCon = this.xui_ui_inpt_scale_ces_objCon.getUIValue();
            objOps = this.xui_ui_inpt_scale_ces_objOps.getUIValue();


            smbCon= Math.floor((smbCon / smbConM) + 0.95);
            objCon = Math.floor((objCon / objConM) + 0.95);
            nfsCon = Math.floor((nfsCon / nfsConM) + 0.95);


            ntype = fltype;
            nlinks = flinks;
            for (i= 0; i < 2; ++i) {
                if (i) {
                    maxFBand = maxBand;
                    ntype = bltype;
                    nlinks = blinks;
                }
                switch (ntype) {
                    case "Ethernet 10Gig":
                        reqBsmb = Math.floor(smbMB / (linkMax10g * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMax10g * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMax10g * nlinks) + 0.95);
                        maxBand = linkMax10g * nlinks * 0.8;
                        break;
                    case "Ethernet 40Gig":
                        reqBsmb = Math.floor(smbMB / (linkMax40g * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMax40g * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMax40g * nlinks) + 0.95);
                        maxBand = linkMax40g * nlinks * 0.8;
                        break;
                    case "Ethernet 56Gig":
                        reqBsmb = Math.floor(smbMB / (linkMax56g * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMax56g * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMax56g * nlinks) + 0.95);
                        maxBand = linkMax56g * nlinks * 0.8;
                        break;
                    case "Ethernet 100Gig":
                        reqBsmb = Math.floor(smbMB / (linkMax100g * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMax100g * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMax100g * nlinks) + 0.95);
                        maxBand = linkMax100g * nlinks * 0.8;
                        break;
                    case "Infiniband DDR":
                        reqBsmb = Math.floor(smbMB / (linkMaxIBddr * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMaxIBddr * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMaxIBddr * nlinks) + 0.95);
                        maxBand = linkMaxIBddr * nlinks * 0.97;
                        if (nlinks > 4){
                            tstr = "Too many Infiniband links per CES node " + nlinks;
                            alert(tstr);
                        }
                        break;
                    case "Infiniband EDR":
                        reqBsmb = Math.floor(smbMB / (linkMaxIBedr * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMaxIBedr * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMaxIBedr * nlinks) + 0.95);
                        maxBand = linkMaxIBedr * nlinks * 0.97;
                        if (nlinks > 4){
                            tstr = "Too many Infiniband links per CES node " + nlinks;
                            alert(tstr);
                        }
                        break;
                    case "Infiniband FDR":
                        reqBsmb = Math.floor(smbMB / (linkMaxIBfdr * nlinks) + 0.95);
                        reqBnfs = Math.floor(nfsMB / (linkMaxIBfdr * nlinks) + 0.95);
                        reqBobj = Math.floor(objMB / (linkMaxIBfdr * nlinks) + 0.95);
                        maxBand = linkMaxIBfdr * nlinks * 0.97;
                        if (nlinks > 4){
                            tstr = "Too many Infiniband links per CES node " + nlinks;
                            alert(tstr);
                        }
                        break;
                    default:
                        break;
                }

                if (reqBsmb > totNodes)
                    totNodes = reqBsmb;
                if (reqBnfs > totNodes)
                    totNodes = reqBnfs;
                if (reqBobj > totNodes)
                    totNodes = reqBobj;
                if (smbCon > totNodes)
                    totNodes = smbCon;
                if (nfsCon > totNodes)
                    totNodes = nfsCon;
                if (objCon > totNodes)
                    totNodes = objCon;

            }

            if (maxFBand > maxBand) {
                tstr = "Front-end bandwidth of CES nodes exceeds back-end bandwidth " + maxFBand + "MB/s > " + maxBand + "MB/s";
                alert(tstr);
            }
            this.xui_ui_inpt_scale_ces_nodesTot.setValue(totNodes);
            this.xui_ui_inpt_scale_ces_fportsTot.setValue(totNodes*flinks);
            this.xui_ui_inpt_scale_ces_bportsTot.setValue(totNodes*blinks);

            this._validate();
        },




        _import_json:function(){
            var JSONfile = JSON.parse(this.xui_ui_input_project_file.getUIValue());
            this.xui_ui_combo_template_1_1_1_total_required.setUIValue(JSONfile.template_sample_1_1_1_total_required);
            new xui.UI.Dialog.pop("IBM System Storage Tools","JSON import complete.");
        },


        _xui_ui_tabs6_onvaluechange:function (profile,oldValue,newValue,force,tag){
            var ns = this, uictrl = profile.boxing();
            //    if (this.xui_ui_chkbx_netscale_infiniband.getUIValue()) {

            //   } else {
            //       this.xui_ui_tabs6.setDisabled(true);
            //}
        },
        _xui_ui_htmlbutton32_onclick:function (profile,e,value){
            var ns = this, uictrl = profile.boxing();
        },
        _xui_ui_label54_onclick:function (profile,e,src){
            var ns = this, uictrl = profile.boxing();
        },
        _xui_ui_rbox_netscale_ha_onitemselected:function (profile,item,e,src,type){
            var ns = this, uictrl = profile.boxing();
        }
    },
    Static:{
        viewStyles:{},

        designViewConf:{
            "width" : 800,
            "height" : 1280,
            "mobileFrame" : false
        }
    }

});