// Author Mark Boas @maboa
$(document).ready(function(){ 
	
	var playerEn = $("#jquery_jplayer_1"); 
	var playerDa = $("#jquery_jplayer_2");     
	
	var playTimeEn = 0;
	var playTimeDa = 0;   
	
	var languageSel = $('#language');    
	
	var lang = 'en';       
	
	var timelinePrefix = 't';       
	
	var currentTime = 0;

   
                 
    
	
	// Show/hide transcript
	
	$('#transcript-show').click(function(){
		$('#transcript-content').slideDown(); 
		$(this).fadeOut(function(){
			$('#transcript-hide').fadeIn();
		}); 
		$('#transcript h2').addClass('open');  
		return false;
	}); 
	
	$('#transcript-hide').click(function(){
		$('#transcript-content').slideUp(); 
		$(this).fadeOut(function(){
			$('#transcript-show').fadeIn();
		});    
		$('#transcript h2').removeClass('open');
		return false;
	});    
	
	
	// Utility

	function getUrlVars() {
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}	 

	// url links to audio  
    

	var endTime = getUrlVars()["e"];

	if (getUrlVars()["e"] != null) { 
		endTime = parseInt(getUrlVars()["e"])/10;
	}
	
	
	playerEn.jPlayer({
		ready: function () {   
			$(this).jPlayer("setMedia", { 
				// need to put mp3 first so that iOS works (I think) but may mean Chrome uses it instead of ogg - Investigate!
				mp3: "http://yoyodyne.cc/audio/nitotmozilla-m.mp3", 
				oga: "http://yoyodyne.cc/audio/nitotmozilla-m.ogg"
			}).jPlayer("pause"); // required for Safari, which seems (ironically) to autoplay by default (could be a jP issue)
			checkStartParam(); 
		},
		solution: "html",
		supplied: "oga, mp3"
		//warningAlerts: true,
		//errorAlerts:true
	})
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.   
		$(this).jPlayer("pauseOthers");
	});

	playerDa.jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "http://yoyodyne.cc/audio/nitotmozilla_da-m.mp3",   
				oga: "http://yoyodyne.cc/audio/nitotmozilla_da-m.ogg"   
			}).jPlayer("pause");   
			checkStartParam();
		},
		solution: "html",
		supplied: "oga, mp3",
		cssSelectorAncestor: "#jp_interface_2" // In the first case it is default in the 2nd case it needs to be specified
	})
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.  
		$(this).jPlayer("pauseOthers");
	});    
	
	function checkStartParam() {
		if (getUrlVars()["s"] != null) {    
			var s = parseInt(getUrlVars()["s"])/10;    

			if (lang == 'en') {  
			    playerEn.jPlayer("play",s);    
			} else {        
				playerDa.jPlayer("play",s);
			}
		}
	}
	
	// These events are fired as play time increments  
	
	var playingWord = 1;

	playerEn.bind($.jPlayer.event.timeupdate, function(event) {       
		
		playTimeEn = event.jPlayer.status.currentPercentAbsolute;  
		currentTime = event.jPlayer.status.currentTime;
		
		// Check for end param         
		
		if (endTime != null && endTime < currentTime) {
			playerEn.jPlayer("pause");   
			endTime = null;
		}
		
		// highlight the words of transcript as the audio plays

        /*var currentMs = currentTime*1000;   
		var wordSpan = wordSpan = $("#transcript-content span:nth-child("+playingWord+")"); 
		var wordMs =wordSpan.attr('m');    
		
		while (wordMs <= currentMs) {
			wordSpan = $("#transcript-content span:nth-child("+playingWord+")");  
			
			playingWord++;   

			wordMs = wordSpan.attr('m');
			 
		}  
		
		console.log("c="+currentMs);
		console.log(wordMs);  
		console.log(wordSpan.html());    
		console.log(playingWord);
		
		$("#transcript-content span:nth-child("+(playingWord-2)+")").addClass('highlight'); */ 
		//$('[m="'+wordMs+'"]').addClass('highlight');   
		//wordSpan.addClass('highlight');  

	});  
	
	playerDa.bind($.jPlayer.event.timeupdate, function(event) { 
		playTimeDa = event.jPlayer.status.currentPercentAbsolute;  
		currentTime = event.jPlayer.status.currentTime;    
		
		// Check for end param 
		    
		if (endTime != null && endTime < currentTime) {
			playerDa.jPlayer("pause");     
			endTime = null;
		}
	});    
	
	// add the subtitle files
	
	//$('#jp_audio_0').attr( 'data-timeline-sources', '..subs/Harddisken_Tristan_Nitot_on_Firefox_4_Mozilla_past_and_future.en.srt' );  
	//$('#jp_audio_1').attr( 'data-timeline-sources', '..subs/Harddisken_Tristan_Nitot_on_Firefox_4_Mozilla_past_and_future.da.srt' );  
	
	// Check for select box language change   
	
	function switchLang(lang) {
		if (lang == 'en') {
			playerEn.jPlayer("playHead", playTimeDa).jPlayer("play");  
			$('#player_da').hide();
			$('#player_en').show(); 
			$('#transcript-content').load('transcript.html');    
		}  
		else {
			playerDa.jPlayer("playHead", playTimeEn).jPlayer("play");  
			$('#player_en').hide();
			$('#player_da').show();
			$('#transcript-content').load('transcript_da.html');     
		}
	} 
	
	// Check URL for language
	
	if (getUrlVars()["l"] == 'da') {
		lang = 'da'; 
		switchLang(lang);
		// Load Danish transcript
		$('#transcript-content').load('transcript_da.html');
		languageSel.val(lang);   
	} else {
		// Load English transcript
		$('#transcript-content').load('transcript.html');
		languageSel.val(lang);   
	};
	
	languageSel.change(function(){  
		lang = $(this).val();
		switchLang(lang);     
	});  
	
	
	// timeline links to audio
	
	$('.big a').live('click',function(){   
		var jumpTo = parseInt($(this).attr('id').replace(timelinePrefix,''))/1000;

		if (lang == 'en') {
			playerEn.jPlayer("play",jumpTo);    
		} else {
			playerDa.jPlayer("play",jumpTo);
		}      
		return false;
	});  
	
	// transcript links to audio
	
	$('#transcript').delegate('span','click',function(){  
		var jumpTo = $(this).attr('m')/1000; 
		if (lang == 'en') {
			playerEn.jPlayer("play",jumpTo);    
		} else {
			playerDa.jPlayer("play",jumpTo);
		}   
		return false;
	}); 
   
	
	// select text function
	
	function getSelText()
	{
		var txt = '';
		if (window.getSelection){
			txt = window.getSelection();
		}
		else if (document.getSelection){
			txt = document.getSelection();
		}
		else if (document.selection){
			txt = document.selection.createRange().text;
		}          
		
		return txt;
	}

	// Sets the excerpt

	$('#transcript-content').mouseup(function(e){     
		
		
		
		var s = 0, e = 0;
 		var select = getSelText(); 
  		var tweetable = select+"";  

		var startSpan = select.anchorNode.nextSibling; 
		if (startSpan == null) {
			startSpan = select.anchorNode.parentNode;
		}
		
		var endSpan = select.focusNode.nextSibling;    
		if (endSpan == null) {  
			endSpan = select.focusNode.parentNode.nextElementSibling; 
			if (endSpan == null) {
				endSpan = select.focusNode.parentNode;
			}
		}     
		
		// We can do this better by looking at the complete tweet once generated and then removing from inside the quote until it fits 140 chars 
		
		if (tweetable.length > 100) {
			tweetable = tweetable.substr(0,97)+'...';
		}
		
 		/*console.dir(select);    
		console.log(startSpan.getAttribute('oval'));    
		console.log(startSpan.getAttribute('m'));   
		console.log(endSpan.getAttribute('oval'));    
		console.log(endSpan.getAttribute('m'));   */
		      
		
		// Short and sweet      
		
		var s = Math.floor(parseInt(startSpan.getAttribute('m'))/100); 
		var e = Math.floor(parseInt(endSpan.getAttribute('m'))/100);   
		
		// Make sure s < e
		
		if (s > e) {
			var temp = e;
			e = s;
			s = temp;
		}
		  
		// Check that it isn't a single click ie endtime is not starttime   
		// Also that tweetable is > 0 in length
		
		if (s != e && tweetable.length > 0) {    
		
			// Clean up window.location in case it already has params on the url    
		
			var winLoc = window.location+"";      
			var url = winLoc;
			var paramStart = winLoc.indexOf('?');   
		
			if (paramStart > 0) {
				url = winLoc.substr(0,paramStart);
			}
		 
			var theTweet = "'"+tweetable+"' "+url+"?s="+s+"&e="+e;  
 
			if (lang == 'da') {
				theTweet = theTweet + '&l=da';
			}
			 
			$('#tweet').empty();
			$('#tweet').append(theTweet);  
			$('#tweet-like').empty();
			$('#tweet-like').append('<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script><a data-url="" data-text="'+theTweet+'" href="http://twitter.com/share?url=x" class="twitter-share-button">Tweet</a>');  
		} 
	});  
});

