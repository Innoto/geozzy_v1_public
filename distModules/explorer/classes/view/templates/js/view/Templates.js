var geozzy = geozzy || {};
if(!geozzy.explorerComponents) geozzy.explorerComponents={};


geozzy.explorerComponents.mapInfoViewTemplate = ''+
  '<div class="gempiContent">'+
    '<div class="gempiImg">'+
      '<img class="img-responsive" src="'+cogumelo.publicConf.mediaHost+'cgmlImg/<%-img%>/fast_cut/<%-img%>.jpg" />'+
    '</div>'+
    '<div class="gempiInfo">'+
      '<div class="gempiTitle"><%-title%></div>'+
      '<div class="gempiLocation"><% if( typeof city !="undefined" && city ){ %><%- city %> <% } %></div>'+
      '<div class="gempiDescription"><%=description%></div>'+
      '<a href="#resource/<%-id%>"><div class="gempiTouchAccess"><% if(touchAccess){ %><button class="btn btn-primary accessButton">Descúbreo</button> <% } %></div></a>'+
    '</div>'+
    '<div class="extraBottomContent"></div>'+
  '</div>';

geozzy.explorerComponents.mapInfoViewMobileTemplate = ''+
'<div class="gempiContent">'+
  '<div class="gempiItem">'+
    '<div class="nextButton"><i class="fa fa-chevron-right " aria-hidden="true"></i></div>' +
    '<div class="previousButton"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>' +
    '<div class="closeButton"><i class="fa fa-times" aria-hidden="true"></i></div>' +

    '<div class="gempiImg accessButton">'+
      '<img class="img-responsive" src="'+cogumelo.publicConf.mediaHost+'cgmlImg/<%-img%>/squareCut/<%-img%>.jpg" />'+
    '</div>'+
    '<div class="gempiInfo">'+
      '<div class="gempiTitle"><%-title%></div>'+
      '<div class="gempiDescription"><%=description%></div>'+
      '<button class="accessButton">ACCEDER</button>'+
    '</div>'+
    '<div class="extraBottomContent"></div>'+
  '</div>'+
'</div>';


geozzy.explorerComponents.listEmpty = ''+
  '<div class="explorerListEmpty">'+
     __('No results found')+
  '</div>';

geozzy.explorerComponents.activeListTinyViewTemplate = ''+
  '<div class="explorerListPager">'+
    '<%=pager%>'+
  '</div>'+
  '<div class="explorerListContent container-fluid">'+
    '<div class="">'+
      '<%=content%>'+
    '</div>'+
  '</div>';

geozzy.explorerComponents.activeListTinyViewElement = ''+
  '<div data-resource-id="<%- id %>" class="col-md-2 col-sm-2 col-xs-4 element element-<%- id %>">'+
    '<div class="elementImg">'+
      '<img class="img-responsive" src="'+cogumelo.publicConf.mediaHost+'cgmlImg/<%- img %>/fast_cut/<%- img %>.jpg" />'+
      '<div data-resource-id="<%- id %>" class="elementHover accessButton">'+
        '<ul class="elementOptions container-fluid"></ul>'+
      '</div>'+
      '<div class="elementFav">'+
        '<div data-favourite-resource="<%- id %>" data-favourite-status="0" class="rExtFavourite rExtFavouriteHidden">'+
          '<i class="fa fa-heart-o fav-off"></i><i class="fa fa-heart fav-on"></i>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="elementInfo">'+
      '<%-title%>'+
    '</div>'+
  '</div>';

geozzy.explorerComponents.activeListTinyViewPager = ''+
  '<div class="previous"><i class="fa fa-sort-asc"></i></div>'+
    '<% for( c=0 ; c <= pages ; c++){ %>'+
      '<% if(c==v.currentPage){ %>'+
        '<div><span class="currentPage"><i class="fa fa-square-o"></i></span></div>'+
      '<% }else{ %>'+
        '<div><span><i class="fa fa-square pageNum" data-page-num="<%- c %>"></i></span></div>'+
      '<% } %>'+
    '<% } %>'+
  '<div class="next"><i class="fa fa-sort-desc"></i></div>';

geozzy.explorerComponents.activeListViewTemplate = ''+
  '<div class="explorerActiveListContent ">'+
      '<% if(typeof activeListReset!="undefined" && activeListReset) { %>'+
        '<div class="activeListReset explorerElSticky">' +
          '<i class="fa fa-info info" aria-hidden="true"></i> <%- activeListResetText %> <i class="fa fa-times clear" aria-hidden="true"></i>'+
        '</div>'+
      '<%}%>'+
      '<%=content%>'+
  '</div>';

geozzy.explorerComponents.activeListViewElement = '' +
  '<div data-resource-id="<%- id %>" class="col-md-12 element">'+
    '<div class="elementImg">'+
      '<img class="img-responsive" src="'+cogumelo.publicConf.mediaHost+'cgmlImg/<%- img %>/explorerXantaresImg/<%- img %>.jpg" />'+
      '<div data-resource-id="<%- id %>" class="elementHover accessButton">'+
        '<ul class="elementOptions container-fluid"></ul>'+
      '</div>'+
      '<div class="elementFav">'+
        '<div style="display:none;" data-favourite-resource="<%- id %>" data-favourite-status="0" class="rExtFavourite rExtFavouriteHidden">'+
          '<i class="fa fa-heart-o fav-off"></i><i class="fa fa-heart fav-on"></i>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="elementInfo">'+
      '<div class="elementTitle"><%-title%></div>'+
      '<div class="elementType"><img src="'+cogumelo.publicConf.mediaHost+'cgmlImg/<%- category.icon %>/typeIconMini/<%- category.icon %>.png"/></i> <%- category.name %></div>'+
    '</div>'+
  '</div>';


geozzy.explorerComponents.filterButtonsViewTemplate = "" +
  " <% if(title){ %> <label><%= title %>:</label><%}%>  "+
  "<ul class='clearfix'>"+
    "<% if(defaultOption){ %> "+
      "<li data-term-id='<%- defaultOption.value %>' > "+
        "<div class='title'><%- defaultOption.title %></div> "+
        "<img class='icon' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- defaultOption.icon %>/typeIcon/icon.png'> " +
        "<img class='iconHover' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- defaultOption.icon %>/typeIconHover/iconHover.png'> " +
        "<img class='iconSelected' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- defaultOption.icon %>/typeIconSelected/iconSelected.png'> " +
      "</li>"+
    "<%}%>"+
    "<%= options %>"+
  "</ul>";


geozzy.explorerComponents.filterButtonsViewOption = "" +
  "<li data-term-id='<%- id %>'>"+
    "<div class='title'><%- name %></div> "+
    "<img class='icon' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- icon %>/typeIcon/icon.png'> " +
    "<img class='iconHover' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- icon %>/typeIconHover/iconHover.png'> " +
    "<img class='iconSelected' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- icon %>/typeIconSelected/iconSelected.png'> " +
  "</li>";


geozzy.explorerComponents.filterComboViewTemplate = "" +
  " <% if(title){ %> <label><%= title %>:</label><%}%>  "+
  "<select class='<%= filterClass %>'>"+
    "<% if(defaultOption){ %> <option value='<%- defaultOption.value %>' icon='<%- defaultOption.icon %>'><%- defaultOption.title %></option> <%}%>"+
    "<%= options %>"+
  "</select>";


geozzy.explorerComponents.filterComboViewOptionT =  "<option value='<%- id %>' icon='<%- icon %>'><%- name %></option>";

geozzy.explorerComponents.filterComboViewSummaryT = "" +
  " <% if(title){ %> <label><%= title %>:</label><%}%>  "+
  "<span class='<%= filterClass %>-Summary'><img class='icon' src='"+cogumelo.publicConf.mediaHost+"cgmlImg/<%- option.icon %>/typeIcon/icon.png'> <%- option.name %> </span>";

geozzy.explorerComponents.filterMinimapViewTemplate = "" +
  "<div class='filtersButton'>"+
    "<div class='filtersButtonContent'><%= iconHtml %></div>"+
    "<div class='icon'><i class='fa fa-angle-down' aria-hidden='true'></i></div>"+
  "</div>"+
  "<div class='boxMinimap'>"+
    "<div class='minimap'>"+
      "<div class='selectedText text-center'></div>"+
      "<div class='map'></div>"+
    "</div>"+
    "<div class='filterResetMinimap'><button><%- resetButtonText %></button></div>"+
  "</div>";

geozzy.explorerComponents.filterResetTemplate = ""+
    "<div class='<%= filterClass %>'>"+
      "<button><%= title %></button> "+
    "</div>"
