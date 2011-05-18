// PLUGIN: Timeline 
// 2011-03-31 @maboa changed id='big' and id='mid' to classes as ids must be unique and these repeat      
// 2011-05-18 @maboa removing the css insertion as we don't need this, also changing asdf as a unique identifier for divs to something more useful/configurable

(function (Popcorn) {

  var i = 0; 
  var divIdPrefix = "pc-timeline-item";
   
   /* var head = document.getElementsByTagName("head")[0];
    var css = document.createElement('link');
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href =  "asdf.css";
    head.insertBefore( css, head.firstChild );  */

  Popcorn.plugin( "timeline" , function( options ) {
    // create a new div and append it to the parent div so nothing
    // that already exists in the parent div gets overwritten
    var newdiv = document.createElement( "div" );
    newdiv.style.display = "none";
    newdiv.id = divIdPrefix+i;      



    if ( document.getElementById( options.target ) ) {
      document.getElementById( options.target ).appendChild( newdiv );
      // if this isnt the first div added to the target div
      if( i ){
        // insert the current div before the previous div inserted
        //document.getElementById( options.target ).insertBefore( newdiv, document.getElementById( "asdf" + ( i - 1 ) ) );      
        // inserts after as it makes it easier to click on the links when they don't move @maboa
		document.getElementById( options.target ).insertBefore(  document.getElementById( divIdPrefix + ( i - 1 ) ), newdiv );        

       }
    }
    
    i++;
	// @maboa changed id='big' and id='mid' to classes as ids must be unique and these repeat 2011-03-31     
    //newdiv.innerHTML = "<p><span class='big'>" + options.title + "</span><br />" + "<span class='mid'>" + options.text + "<br />" + "</span><a href='" + options.link_href + "' target='_blank'>" + options.link_text + "</a></p>";
          
	// @maboa completely rejigging this to suit hyperdisken reqmt
	newdiv.innerHTML = "<p><span class='big'>" + options.title + "</span> - <a href='" + options.link_href + "' target='_blank'>" + options.link_text + "</a><br /><span class='mid'>" + options.text + "</span></p><br />";
    
    return {
      /**
       * @member webpage
       * The start function will be executed when the currentTime
       * of the video reaches the start time provided by the
       * options variable
       */
      start: function( event, options ){
        newdiv.setAttribute( "style", "display:block" );       
      },
      /**
       * @member webpage
       * The end function will be executed when the currentTime
       * of the video reaches the end time provided by the
       * options variable
       */
      end: function(event, options){
        newdiv.setAttribute( "style", "display:none" );
      }
    };
  },
  {
    about: {
      name: "Popcorn Timeline Plugin",
      version: "0.1.1",
      author: "David Seifried, Mark Boas (@maboa)",
      website: "dseifried.wordpress.com"
    },
    options: {
      start          : { elem:"input", type:"text", label:"In" },
      end            : { elem:"input", type:"text", label:"Out" },
      target         : "feed-container",
      text           : { elem:"input", type:"text", label:"text" }
    }
  });  
})( Popcorn );
