document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_0')
  .volume(0)
  .play()
  //LINKS
			.timeline({
       		start: 1, // seconds
       		end: 1200, // seconds
		        target: "timeline",
		        title: "<a href='#' id='t1000'>&#x266B;</a>",
		        text: "[wikipedia.org]",
		        link_text: "Danish Broadcasting Corporation",
				link_href: "http://en.wikipedia.org/wiki/DR_%28broadcaster%29"
			 })
	  		.timeline({
		        start: 28, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t28000'>&#x266B;</a>",
		        text: "[microsoft.com]",
		        link_text: "Microsoft Internet Explorer",
				link_href: "http://windows.microsoft.com/en-US/internet-explorer/products/ie/home"
			})
	  		.timeline({
		        start: 34, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t34000'>&#x266B;</a>",
		        text: "[mozilla.com]",
		        link_text: "Firefox 4",
				link_href: "http://www.mozilla.com"
			})
	  		.timeline({
		        start: 39, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t39000'>&#x266B;</a>",
		        text: "[mozilla.com]",
		        link_text: "Firefox 4 mobile",
				link_href: "http://www.mozilla.com/mobile/"
			})
	  		.timeline({
		        start: 155, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t155000'>&#x266B;</a>",
		        text: "[google.com]",
		        link_text: "Google Chrome",
				link_href: "http://www.google.com/chrome"
			})
	  		.timeline({
		        start: 160, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t160000'>&#x266B;</a>",
		        text: "[apple.com]",
		        link_text: "Apple Safari",
				link_href: "http://www.apple.com/safari/"
			})
	  		.timeline({
		        start: 165, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t165000'>&#x266B;</a>",
		        text: "[opera.com]",
		        link_text: "Opera",
				link_href: "http://www.opera.com/"
			})
	  		.timeline({
		        start: 170, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t170000'>&#x266B;</a>",
		        text: "[wikipedia.org]",
		        link_text: "Usage share of web browsers",
				link_href: "http://en.wikipedia.org/wiki/Usage_share_of_web_browsers"
			})
	  		.timeline({
		        start: 221, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t221000'>&#x266B;</a>",
		        text: "[slashgear.com]",
		        link_text: "Slashgear: Firefox 4 beat IE9 on launch day",
				link_href: "http://www.slashgear.com/firefox-4-beat-ie9-market-share-on-launch-day-24142306/"
			})
	  		.timeline({
		        start: 231, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t231000'>&#x266B;</a>",
		        text: "[wikipedia.org]",
		        link_text: "Graph: Usage share of web browsers",
				link_href: "http://en.wikipedia.org/wiki/File:Usage_share_of_web_browsers_%28Source_Stat_Counter%29.svg"
			})
			.timeline({
		        start: 340, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t340000'>&#x266B;</a>",
		        text: "[mozilla.com]",
		        link_text: "What are App Tabs?",
				link_href: "http://support.mozilla.com/en-US/kb/what-are-app-tabs"
			})
			.timeline({
		        start: 370, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t370000'>&#x266B;</a>",
		        text: "[flock.com]",
		        link_text: "Flock",
				link_href: "http://www.flock.com/"
			})
			.timeline({
		        start: 374, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t374000'>&#x266B;</a>",
		        text: "[rockmelt.com]",
		        link_text: "Rockmelt",
				link_href: "http://www.rockmelt.com/"
			})
			.timeline({
		        start: 437, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t437000'>&#x266B;</a>",
		        text: "[mozilla.org]",
		        link_text: "Facebook toolbar for Firefox",
				link_href: "https://addons.mozilla.org/en-us/firefox/addon/facebook-toolbar/"
						 })
			.timeline({
		        start: 450, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t450000'>&#x266B;</a>",
		        text: "[mozilla.com]",
		        link_text: "What is Firefox Sync?",
				link_href: "http://support.mozilla.com/en-US/kb/what-firefox-sync"
			})
	  		.timeline({
			        start: 550, // seconds
			        end: 1200,// seconds
			        target: "timeline",
			        title: "<a href='#' id='t550000'>&#x266B;</a>",
			        text: "[google.com]",
			        link_text: "Chrome Sync",
					link_href: "http://www.google.com/support/chrome/bin/answer.py?answer=165139/"
			})
		  	.timeline({
			        start: 600, // seconds
			        end: 1200,// seconds
			        target: "timeline",
			        title: "<a href='#' id='t600000'>&#x266B;</a>",
			        text: "[mozilla.com]",
			        link_text: " Firefox Sync security",
					link_href: "http://www.mozilla.com/mobile/sync/"
			})
	  		.timeline({
		        start: 679, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t679000'>&#x266B;</a>",
		        text: "[mozilla.org]",
		        link_text: "The Mozilla Foundation",
				link_href: "http://www.mozilla.org/foundation/"
			})
	  		.timeline({
		        start: 779, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t779000'>&#x266B;</a>",
		        text: "[google.com]",
		        link_text: "The Google App Marketplace",
				link_href: "https://www.google.com/enterprise/marketplace/"
			})
	    	.timeline({
		        start: 829, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t829000'>&#x266B;</a>",
		        text: "[apple.com]",
		        link_text: "Apple App Store",
				link_href: "http://www.apple.com/mac/app-store/"
			})
	  		.timeline({
		        start: 885, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t825000'>&#x266B;</a>",
		        text: "[mozillalabs.com]",
		        link_text: "Mozilla Open Web App Store",
				link_href: "https://apps.mozillalabs.com/"
			})
	  		.timeline({
		        start: 1024, // seconds
		        end: 1200,// seconds
		        target: "timeline",
		        title: "<a href='#' id='t1024000'>&#x266B;</a>",
		        text: "[mozillalabs.com]",
		        link_text: "Chrome Firefox Open Web Apps Add-on",
				link_href: "https://apps.mozillalabs.com/addons/chrome.html"
			})
			//FOOTNOTES
		     .footnote({
				start: 10, // seconds
				end: 20, // seconds
				text: 'This demo is based on an interview originally broadcast <a href="http://www.dr.dk/harddisken/blog/2011/03/04/mozilla-app-butikker-allevegne/" target="_blank">march 4th 2011</a>, on the danish tech radio show <a href="http://www.dr.dk/harddisken/" target="_blank">HARDDISKEN</a>',
				target: 'footnote'
			})
			     .footnote({
			       start: 21, // seconds
			       end: 31, // seconds
			       text: 'The goal of this demo is to "open" up Harddisken, using <a href="http://www.w3.org/html/logo/" target="_blank">HTML5</a> audio and <a href="http://www.popcornjs.org/"target="_blank">Popcorn.js</a>, making it connect with the web and reach an international audience.',
			       target: 'footnote'
			     })
			     .footnote({
			       start: 32, // seconds
			       end: 48, // seconds
			       text: 'Host and reporter Anders Hoegh Nissen interviews <a href="http://standblog.org/" target="_blank">Tristan Nitot</a>, president of <a href="http://mozilla.org/"target="_blank">Mozilla</a> Europe, about the Firefox 4 release and the past, present and future of Mozilla.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 51, // seconds
			       end: 61, // seconds
			       text: 'Anders also shared his research and sources for this demo.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 62, // seconds
			       end: 100, // seconds
			       text: 'You can download the full session including source audio, editable with <a href="http://nsaka.com/" target="_blank">Hindenburg</a> <a href="http://www.henrikmoltke.dk/hyperdisken/hyperdisken.zip" target="_blank">here</a>.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 101, // seconds
			       end: 180, // seconds
			       text: '.. and read a <a href="https://castingwords.com/store/transcript/Q1s/83777.html" target="_blank">full transcript </a> of the source interview.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 181, // seconds
			       end: 240, // seconds
			       text: 'Anders read this article <a href="http://kara.allthingsd.com/20110224/video-mozilla-ceo-gary-kovacs-talks-firefox-4-competition-with-googles-chrome-and-more/" target="_blank">Mozilla CEO Gary Kovacs on Google Chrome and more</a> while researching for this interview.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 241, // seconds
			       end: 276, // seconds
			       text: 'and skimmed through this piece from Wired UK: <a href="http://www.wired.co.uk/magazine/archive/2010/05/features/mozilla-vs-king-corporate" target="_blank">Battle of the browsers: Mozilla vs King corporate</a>',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 286, // seconds
			       end: 300, // seconds
			       text: 'Internet Explorer was released on march 14th. It was downloaded 2.3 million times during the first 24 hours.',
			       target: 'footnote'
			         })
			        .footnote({
			       start: 301, // seconds
			       end: 310, // seconds
			       text: 'Firefox 4 was downloaded 7.1 million times in 24 hours, followed by a second day boost of 8.75 million, blowing away the previous Guinness World Record record for single-day software downloads..',
			       target: 'footnote'
			         })
			        .footnote({
			       start: 311, // seconds
			       end: 351, // seconds
			       text: 'Firefox 4 passed 50 million downloads on march 31st.<a href="http://glow.mozilla.org//" target="_blank">This page</a> tracks Firefox 4 downloads in real-time.',
			       target: 'footnote'
			       })
			      .footnote({
			       start: 352,// seconds
			       end: 659, // seconds
			       text: 'Former Mozilla chief designer Aza Raskin´s <a href="http://www.azarask.in/blog/post/privacy-icons/" target="_blank">Privacy Icons</a> aim to simplify and make visible what happens to your personal data when using web services.',
			       target: 'footnote'
			         })
			      .footnote({
			       start: 660, // seconds
			       end: 800, // seconds
			       text: 'Firefox Mobile officially launched on march 29th and is available for Android and Maemo devices.',
			       target: 'footnote'
			         })
			     .footnote({
			       start: 801, // seconds
			       end: 900, // seconds
			       text: 'Imagine if more radio were available, searchable and shareable on the open web..',
			       target: 'footnote'
			         })
			     .footnote({
			       start: 901, // seconds
			       end: 1200, // seconds
			       text: 'This demo was brought to you in collaboration by DR <a href="http://www.dr.dk/harddisken/"target="_blank">HARDDISKEN</a> and <a href="http://www.drumbeat.org/"target="_blank">Mozilla Drumbeat</a>. Stay tuned for more HYPER AUDIO',
			       target: 'footnote'
			     }) 

// Subtitles!

.subtitle({
  start: 1.527, 
  end: 7.557, 
  text: "Let's move on to the browser - the one on your computer, smartphone and tablets.", 
  target: "subtitlediv"
})  

.subtitle({
  start: 7.557, 
  end: 10.57, 
  text: "It is one of the most important tools in our everyday life.", 
  target: "subtitlediv"
})   
.subtitle({
  start: 10.57, 
  end: 16.51, 
  text: "We use the browser to read news, watch TV, check email, chat with friends, shop, book tickets -", 
  target: "subtitlediv"
})
.subtitle({
  start: 16.52, 
  end: 19.581, 
  text: "Thousands of the things we now do on the web.", 
  target: "subtitlediv"
})
.subtitle({
  start: 19.581, 
  end: 24.521, 
  text: "That is why it is so important which browser we use and how it works.", 
  target: "subtitlediv"
})
.subtitle({
  start: 24.522, 
  end: 29.535, 
  text: "The most common browser is still Internet Explorer from Microsoft", 
  target: "subtitlediv"
})
.subtitle({
  start: 29.535, 
  end: 33.50, 
  text: "but Mozilla's Firefox has long been the second most popular", 
  target: "subtitlediv"
})
.subtitle({
  start: 33.52, 
  end: 37.532, 
  text: "The official Firefox version 4 launches in a few days,", 
  target: "subtitlediv"
})
.subtitle({
  start: 37.533, 
  end: 40.597, 
  text: "including a model for Android phones.", 
  target: "subtitlediv"
})
.subtitle({
  start: 40.597, 
  end: 48.550, 
  text: "On this occasion, Tristan Nitot from Mozilla's European headquarters in Paris tells the story of Firefox", 
  target: "subtitlediv"
})
.subtitle({
  start: 48.559, 
  end: 51.582, 
  text: "and some of the new version 4 features", 
  target: "subtitlediv"
})
.subtitle({
  start: 53.015, 
  end: 59.050, 
  text: "Our goal, when we launched Firefox in 2004,", 
  target: "subtitlediv"
})
.subtitle({
  start: 59.058, 
  end: 63.059, 
  text: "was to reintroduce choice and competition in the browser market.", 
  target: "subtitlediv"
})
.subtitle({
  start: 63.071, 
  end: 66.551, 
  text: "Ten years ago, Microsoft's Internet Explorer pretty much sat on the market.", 
  target: "subtitlediv"
}) 
.subtitle({
  start: 66.553, 
  end: 72.505, 
  text: "Netscape, that used to be very popular was been beaten, and besides from Netscape there were only minor niche projects,", 
  target: "subtitlediv"
})
.subtitle({
  start: 72.505, 
  end: 78.58, 
  text: "like the Norwegian Opera browser, and a couple of years later Apple's Safari, which, at that time, only worked with Mac.", 
  target: "subtitlediv"
})
.subtitle({
  start: 78.592, 
  end: 83.554, 
  text: "But from the ruins of Netscape rose Mozilla [missing text] Firefox,", 
  target: "subtitlediv"
})
.subtitle({
  start: 83.558, 
  end: 88.506, 
  text: "launching its official version 1.0 in November 2004.", 
  target: "subtitlediv"
})
.subtitle({
  start: 88.506, 
  end: 94.583, 
  text: "Today, a little more than 6 years later, Firefox has become a huge success, says Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 95.534, 
  end: 98.521, 
  text: "We have succeeded amazingly", 
  target: "subtitlediv"
})
.subtitle({
  start: 98.521, 
  end: 103.505, 
  text: "There are more than 400 million active Firefox users", 
  target: "subtitlediv"
})
.subtitle({
  start: 103.523, 
  end: 108.531, 
  text: "Our market share globally is about 25%", 
  target: "subtitlediv"
})
.subtitle({
  start: 108.547, 
  end: 116.534, 
  text: "- 33% in Europe and in some countries, f.x. Poland and Germany, we are approaching 50%.", 
  target: "subtitlediv"
})
.subtitle({
  start: 116.534, 
  end: 119.582, 
  text: "However, with the success comes a certain pressure.", 
  target: "subtitlediv"
})
.subtitle({
  start: 119.582, 
  end: 123.52, 
  text: "To a high degree, Firefox boosted browser awareness", 
  target: "subtitlediv"
})
.subtitle({
  start: 123.52, 
  end: 126.573, 
  text: "and offered a long-awaited alternative to Internet Explorer.", 
  target: "subtitlediv"
})
.subtitle({
  start: 126.573, 
  end: 133.573, 
  text: "But it also opened the battle for market shares, and today there are at least a handful of browsers out there fighting.", 
  target: "subtitlediv"
})
.subtitle({
  start: 133.579, 
  end: 135.59, 
  text: "Quite an achievement.", 
  target: "subtitlediv"
})
.subtitle({
  start: 136.558, 
  end: 139.583, 
  text: "But you must be careful of what you wish for.", 
  target: "subtitlediv"
})
.subtitle({
  start: 139.583, 
  end: 141.59, 
  text: "We wanted competition and now we have it.", 
  target: "subtitlediv"
})
.subtitle({
  start: 141.59, 
  end: 150.512, 
  text: "Because in the meantime, other vendors have started to create good browsers", 
  target: "subtitlediv"
})
.subtitle({
  start: 150.512, 
  end: 154.558, 
  text: "In practice, however, the big five share the market.", 
  target: "subtitlediv"
})
.subtitle({
  start: 154.558, 
  end: 159.53, 
  text: "Globally, Internet Explorer is still the largest, although their share slowly decreases.", 
  target: "subtitlediv"
})
.subtitle({
  start: 159.53, 
  end: 165.52, 
  text: "Next comes Firefox, Google's Chrome, Apple's Safari and Norwegian Opera.", 
  target: "subtitlediv"
})
.subtitle({
  start: 165.52, 
  end: 168.526, 
  text: "the remaining are competing over a few percent of the market.", 
  target: "subtitlediv"
})
.subtitle({
  start: 169.539, 
  end: 174.515, 
  text: "The exact numbers vary from month to month depending on which method of measurement is used.", 
  target: "subtitlediv"
})
.subtitle({
  start: 174.515, 
  end: 177.584, 
  text: "But the overall development is pretty stable", 
  target: "subtitlediv"
})
.subtitle({
  start: 177.584, 
  end: 182.547, 
  text: "Slowly but surely Internet Explorer loses users, Firefox's number remains stable", 
  target: "subtitlediv"
})   
.subtitle({
  start: 182.547, 
  end: 188.537, 
  text: "The alternative browsers such as Chrome, Safari and Opera are gaining percentages.", 
  target: "subtitlediv"
})
.subtitle({
  start: 188.537, 
  end: 193.55, 
  text: "During the last couple of years, especially Google's Chrome has drawn attention.", 
  target: "subtitlediv"
})
.subtitle({
  start: 193.55, 
  end: 196.575, 
  text: "The people behind - among them an important Danish team of programmers -", 
  target: "subtitlediv"
})
.subtitle({
  start: 196.575, 
  end: 201.564, 
  text: "have focused on speed and that the browser must be fast and display pages quickly", 
  target: "subtitlediv"
})
.subtitle({
  start: 201.564, 
  end: 208.521, 
  text: "but slowly more and more features are added, the latest being a web-store selling browser programs and add-ons", 
  target: "subtitlediv"
})
.subtitle({
  start: 208.521, 
  end: 215.519, 
  text: "To Tristan Nitot and Mozilla, the main competitor is still Microsoft's Internet Explorer, he says.", 
  target: "subtitlediv"
})
.subtitle({
  start: 215.519, 
  end: 218.511, 
  text: "We're keeping an eye out for Google and Chrome", 
  target: "subtitlediv"
})
.subtitle({
  start: 218.511, 
  end: 222.5, 
  text: "we are very aware of the competition. But actually our goal is Internet Explorer", 
  target: "subtitlediv"
})
.subtitle({
  start: 222.5, 
  end: 227.546, 
  text: "Much more so than Chrome.", 
  target: "subtitlediv"
})
.subtitle({
  start: 227.546, 
  end: 235.527, 
  text: "It might seem counter intuitive, but if you look at graphs showing the evolution of market share", 
  target: "subtitlediv"
})
.subtitle({
  start: 235.527, 
  end: 241.558, 
  text: "you will see that Chrome is hurting Microsoft, not us", 
  target: "subtitlediv"
})
.subtitle({
  start: 241.558, 
  end: 246.543, 
  text: "Looking at the statistics for the last 2-3, it seems that Tristan is right.", 
  target: "subtitlediv"
})
.subtitle({
  start: 246.543, 
  end: 254.513, 
  text: "Firefox' share is fairly stable while Chrome has worked its way up to around 10 percent since its launch in September 2008", 
  target: "subtitlediv"
})
.subtitle({
  start: 254.513, 
  end: 257.59, 
  text: "- and those shares come mainly from Internet Explorer.", 
  target: "subtitlediv"
})
.subtitle({
  start: 257.59, 
  end: 264.56, 
  text: "On the other hand, it is quite likely that a proportion of new Chrome users actually come from Firefox,", 
  target: "subtitlediv"
})
.subtitle({
  start: 264.56, 
  end: 271.52, 
  text: "while other users have moved from Explorer to Firefox and therefore kept their share stable.", 
  target: "subtitlediv"
})
.subtitle({
  start: 271.52, 
  end: 278.589, 
  text: "So fare, so good.", 
  target: "subtitlediv"
})
.subtitle({
  start: 274.589, 
  end: 277.673, 
  text: "But the fine figures should not lead to a rest on the laurels.", 
  target: "subtitlediv"
})
.subtitle({
  start: 277.573, 
  end: 284.505, 
  text: "Chrome is constantly updating its browser and during the last couple of years, Microsoft has focused on Explorer updates", 
  target: "subtitlediv"
})   
.subtitle({
  start: 284.505, 
  end: 287.57, 
  text: "and has a version 9 coming out soon.", 
  target: "subtitlediv"
})
.subtitle({
  start: 287.57, 
  end: 292.598, 
  text: "Therefore Mozilla is planning to launch its Firefox version 4 within the next couple of weeks.", 
  target: "subtitlediv"
})
.subtitle({
  start: 292.598, 
  end: 299.577, 
  text: "Beta versions have been available for some months now, which is why Tristan can tell us about the new features.", 
  target: "subtitlediv"
})
.subtitle({
  start: 299.577, 
  end: 303.543, 
  text: "Both in the version launching now and in longer terms.", 
  target: "subtitlediv"
})
.subtitle({
  start: 304.524, 
  end: 316.541, 
  text: "What you will notice is that the user interface, the appearance of Firefox 4, will have evolved significantly.", 
  target: "subtitlediv"
})
.subtitle({
  start: 316.541, 
  end: 319.548, 
  text: "In general, focus has been on streamlining version 4,", 
  target: "subtitlediv"
})
.subtitle({
  start: 319.548, 
  end: 321.589, 
  text: "both regarding web page load time", 
  target: "subtitlediv"
})
.subtitle({
  start: 321.589, 
  end: 326.51, 
  text: "and in relation to user interface, says Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 326.51, 
  end: 333.5, 
  text: "Simplicity and effectiveness have become important parameters of competition, especially after the launch of Google's Chrome", 
  target: "subtitlediv"
})
.subtitle({
  start: 333.5, 
  end: 337.57, 
  text: "and former Firefox version might have had a tendency to look overloaded.", 
  target: "subtitlediv"
})
.subtitle({
  start: 337.57, 
  end: 344.558, 
  text: "An other new function that Tristan would like to highlight is the so-called App Tab -", 
  target: "subtitlediv"
})
.subtitle({
  start: 345.558, 
  end: 346.572, 
  text: "tabs with the web pages you often use", 
  target: "subtitlediv"
})
.subtitle({
  start: 346.572, 
  end: 349.579, 
  text: "can have their permanent place in the browser, without them necessarily taking up a lot of space.", 
  target: "subtitlediv"
})
.subtitle({
  start: 350.519, 
  end: 354.565, 
  text: "This means that it is always easy to access, they take up very little space in the tab list", 
  target: "subtitlediv"
})
.subtitle({
  start: 355.508, 
  end: 359.571, 
  text: "but they are always there, even if you have hundreds of tabs open", 
  target: "subtitlediv"
})
.subtitle({
  start: 360.538, 
  end: 367.54, 
  text: "so you can quickly check your online status or send emails.", 
  target: "subtitlediv"
})
.subtitle({
  start: 367.58, 
  end: 371.594, 
  text: "During the last couple of years some of the newer alternative browsers, such as Flock and Rockmelt", 
  target: "subtitlediv"
})
.subtitle({
  start: 372.558, 
  end: 378.508, 
  text: "have tried to integrate our many social networks directly into the browser", 
  target: "subtitlediv"
})
.subtitle({
  start: 378.508, 
  end: 381.569, 
  text: "- but have not gained a great deal of market share.", 
  target: "subtitlediv"
})
.subtitle({
  start: 381.569, 
  end: 386.587, 
  text: "Mozilla keeps an eye on them because there is no doubt that social activities", 
  target: "subtitlediv"
})
.subtitle({
  start: 386.587, 
  end: 392.584, 
  text: "on Facebook, Twitter, Foursquare etc. have become key in the use of the Internet.", 
  target: "subtitlediv"
})
.subtitle({
  start: 392.584, 
  end: 401.511, 
  text: "But Mozilla has not wanted to do that blindfolded. In order to integrate that kind of use in the browser, it has to be done in the right way, says Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 401.511, 
  end: 408.568, 
  text: "We can leverage the social but we also want to do it in a very different way.", 
  target: "subtitlediv"
})
.subtitle({
  start: 408.568, 
  end: 415.521, 
  text: "So far Mozilla has had no problem waiting. One of the central features in Firefox is that anybody", 
  target: "subtitlediv"
})
.subtitle({
  start: 415.521, 
  end: 420.595, 
  text: "can make their own add-ons to the browser and customize it to their own needs.", 
  target: "subtitlediv"
})
.subtitle({
  start: 420.595, 
  end: 427.505, 
  text: "This means that for a long time you have been able to install add-ons, which f.x. makes it possible to show Facebook-feeds,", 
  target: "subtitlediv"
})
.subtitle({
  start: 427.505, 
  end: 432.522, 
  text: "write Twitter updates directly from the browser's address bar and much, much more.", 
  target: "subtitlediv"
})
.subtitle({
  start: 432.522, 
  end: 440.58, 
  text: "One of the reasons that Mozilla has wanted to wait with embracing things like Facebook, is the question of access to personal data,", 
  target: "subtitlediv"
})
.subtitle({
  start: 440.58, 
  end: 445.586, 
  text: "bookmarks, surf history, passwords for different services and so on.", 
  target: "subtitlediv"
})
.subtitle({
  start: 445.586, 
  end: 449.535, 
  text: "An example of the challenge - and how to solve it -", 
  target: "subtitlediv"
})
.subtitle({
  start: 449.535, 
  end: 453.519, 
  text: "is found in the new sync feature, says Tristan.", 
  target: "subtitlediv"
})
.subtitle({
  start: 453.519, 
  end: 457.565, 
  text: "Sync makes it possible to synchronize your browser history,", 
  target: "subtitlediv"
})
.subtitle({
  start: 457.565, 
  end: 462.584, 
  text: "your bookmarks and your passwords between different versions of Firefox -", 
  target: "subtitlediv"
})
.subtitle({
  start: 462.6, 
  end: 472.55, 
  text: "so you have Firefox at the office, on your laptop and even in your pocket on a android device.", 
  target: "subtitlediv"
})
.subtitle({
  start: 472.55, 
  end: 479.507, 
  text: "The synchronizing even works with smart phones if you use it in the Firefox browser for Android phones", 
  target: "subtitlediv"
})
.subtitle({
  start: 479.507, 
  end: 483.516, 
  text: "that is available in a beta version.", 
  target: "subtitlediv"
})
.subtitle({
  start: 483.516, 
  end: 487.577, 
  text: "Smart phone users in particular have a huge advantage when using bookmarks from the computer browser,", 
  target: "subtitlediv"
})
.subtitle({
  start: 487.577, 
  end: 494.555, 
  text: "because you don't have to type too many searches and URLs on the relatively small and clumsy mobile keypads.", 
  target: "subtitlediv"
})
.subtitle({
  start: 494.555, 
  end: 498.552, 
  text: "But in order to use that kind of synchronization between devices,", 
  target: "subtitlediv"
})
.subtitle({
  start: 498.552, 
  end: 501.586, 
  text: "your browsing history must be stored somewhere on the Internet,", 
  target: "subtitlediv"
})
.subtitle({
  start: 501.586, 
  end: 506.582, 
  text: "so that you can use it no matter where you access the web from, - as long as you are logged in, that is.", 
  target: "subtitlediv"
})
.subtitle({
  start: 506.582, 
  end: 513.561, 
  text: "Finding a solution to that problem has been a key priority to Mozilla. Because it is not optimal that important information about ourselves", 
  target: "subtitlediv"
})
.subtitle({
  start: 513.561, 
  end: 519.599, 
  text: "and our activities are kept with Google, Facebook and other big private companies, says Tristan.", 
  target: "subtitlediv"
})
.subtitle({
  start: 519.599, 
  end: 525.576, 
  text: "The web is about participation. It was built to enable people to participate and create new websites and use", 
  target: "subtitlediv"
})
.subtitle({
  start: 525.576, 
  end: 529.565, 
  text: "content and produce content", 
  target: "subtitlediv"
})
.subtitle({
  start: 529.565, 
  end: 539.58, 
  text: "And if you suddenly a private company with a large influence", 
  target: "subtitlediv"
})
.subtitle({
  start: 539.58, 
  end: 544.506, 
  text: "it is not scalable and reasonable.", 
  target: "subtitlediv"
})
.subtitle({
  start: 544.506, 
  end: 550.54, 
  text: "If you use Google Chrome [missing text] similar synchronization feature, then all the information lies with Google.", 
  target: "subtitlediv"
})
.subtitle({
  start: 550.04, 
  end: 555.569, 
  text: "That is not necessarily a huge concern for the many people who already use Google services", 
  target: "subtitlediv"
})
.subtitle({
  start: 555.569, 
  end: 559.525, 
  text: "- from searches to Gmail, to maps, documents and pictures.", 
  target: "subtitlediv"
})
.subtitle({
  start: 559.525, 
  end: 563.559, 
  text: "But to Mozilla, it is crucial that the users themselves are in control.", 
  target: "subtitlediv"
})
.subtitle({
  start: 563.559, 
  end: 569.54, 
  text: "The synchronization feature offers the option that technically savvy users simply", 
  target: "subtitlediv"
})
.subtitle({
  start: 569.54, 
  end: 574.555, 
  text: "install their own server that stores information about your web activities", 
  target: "subtitlediv"
})
.subtitle({
  start: 574.555, 
  end: 581.564, 
  text: "Sync is open source so you can install your own version of the server if you want.", 
  target: "subtitlediv"
})
.subtitle({
  start: 581.564, 
  end: 589.571, 
  text: "Of course there is a Mozilla version of the server running of you want an account quickly, you can do that.", 
  target: "subtitlediv"
})
.subtitle({
  start: 589.571, 
  end: 593.596, 
  text: "And get access immediately, but you can run your own server if you want.", 
  target: "subtitlediv"
})
.subtitle({
  start: 593.596, 
  end: 600.561, 
  text: "However, the majority of users probably will not go that far. Tristan also emphasizes that all browser data is encrypted,", 
  target: "subtitlediv"
})
.subtitle({
  start: 600.561, 
  end: 607.551, 
  text: "so that it is definitely only oneself who can see and use the data, f.x. when synchronizing with other computers or mobile browsers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 607.551, 
  end: 612.541, 
  text: "That is of course very important if you keep important, personal information.", 
  target: "subtitlediv"
})
.subtitle({
  start: 612.541, 
  end: 616.565, 
  text: "but it is also a kind of ideological battle, says Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 616.565, 
  end: 622.519, 
  text: "Because when we use services like Facebook and Google, we don't pay directly", 
  target: "subtitlediv"
})
.subtitle({
  start: 622.519, 
  end: 626.577, 
  text: "but that doesn't mean that their services are free, he says.", 
  target: "subtitlediv"
})
.subtitle({
  start: 626.577, 
  end: 633.549, 
  text: "It's interesting - you might get the impression that it is free, but it is not.", 
  target: "subtitlediv"
})
.subtitle({
  start: 633.549, 
  end: 638.514, 
  text: "All our surfing, all our searches an so on are tracked and logged", 
  target: "subtitlediv"
})
.subtitle({
  start: 638.514, 
  end: 642.575, 
  text: "and in that sense we pay for many of the free services with data about ourselves and our behavior.", 
  target: "subtitlediv"
})
.subtitle({
  start: 642.575, 
  end: 650.566, 
  text: "Not in the sense that Google employees know that that exact user''s name is Peter Jensen", 
  target: "subtitlediv"
})
.subtitle({
  start: 650.566, 
  end: 653.58, 
  text: "and has visited dr.dk and clicked on such and such article about the royal family, or whatever it is,", 
  target: "subtitlediv"
})
.subtitle({
  start: 653.58, 
  end: 660.512, 
  text: "but the underlying systems know it and typically use it to customize and target advertising to consumers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 660.512, 
  end: 667.551, 
  text: "It is a product that you actually buy or butter in exchange of your private data.", 
  target: "subtitlediv"
})
.subtitle({
  start: 667.551, 
  end: 671.556, 
  text: "We don't do that at Mozilla, but most of the industry does it.", 
  target: "subtitlediv"
})
.subtitle({
  start: 671.556, 
  end: 680.5, 
  text: "Companies like Google must make money and increase share value, and that is fine, it just is not Mozilla's model", 
  target: "subtitlediv"
})
.subtitle({
  start: 680.5, 
  end: 687.555, 
  text: "Mozilla is a nonprofit organization and does not collect data about users in order to show them ads, and that is important to us, says Tristan.", 
  target: "subtitlediv"
})
.subtitle({
  start: 687.555, 
  end: 696.51, 
  text: "But social networks, networking and personal presence on many platforms is important and will only become more important, and Mozilla knows that.", 
  target: "subtitlediv"
})
.subtitle({
  start: 696.51, 
  end: 700.578, 
  text: "Therefore, one can expect Mozilla to try to solve that challenge in its own way -", 
  target: "subtitlediv"
})
.subtitle({
  start: 700.578, 
  end: 706.592, 
  text: "not necessarily in the first version of the Firefox 4, but soon, promises Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 706.592, 
  end: 719.524, 
  text: "Identity and 'social' are two issues that are extremely important to address and in the future you may expect some kind of solution to the issue from Mozilla.", 
  target: "subtitlediv"
})
.subtitle({
  start: 719.524, 
  end: 725.542, 
  text: "Anders, you've been playing with the beta version of Firefox 4?", 
  target: "subtitlediv"
})
.subtitle({
  start: 725.542, 
  end: 730.596, 
  text: "Yes, and I actually think it works just fine. Especially if you are used to using Firefox", 
  target: "subtitlediv"
})
.subtitle({
  start: 730.596, 
  end: 737.577, 
  text: "So the version you can download now, it's a super fine browser?", 
  target: "subtitlediv"
})
.subtitle({
  start: 737.577, 
  end: 742.595, 
  text: "It is super fast and the sync function is exciting to play with.", 
  target: "subtitlediv"
})
.subtitle({
  start: 742.595, 
  end: 755.506, 
  text: "However, the Android version of Firefox 4 does not quite compete with the other browsers on the Android platform.", 
  target: "subtitlediv"
})
.subtitle({
  start: 755.506, 
  end: 757.534, 
  text: "Its a little slow.", 
  target: "subtitlediv"
})
.subtitle({
  start: 757.534, 
  end: 760.587, 
  text: "But compared to previous beta versions it is already much faster and better.", 
  target: "subtitlediv"
})
.subtitle({
  start: 760.587, 
  end: 764.584, 
  text: "So I'm sure they'll have a good version ready for the official launch.", 
  target: "subtitlediv"
})
.subtitle({
  start: 764.584, 
  end: 768.554, 
  text: "And it's still a beta, so there are probably improvements coming", 
  target: "subtitlediv"
})
.subtitle({
  start: 768.554, 
  end: 772.518, 
  text: "Mozilla has recently introduced a kind of net shop?", 
  target: "subtitlediv"
})
.subtitle({
  start: 772.518, 
  end: 780.555, 
  text: "Yes, Tristan Nitot told about Mozilla's idea for a kind of shared app-store for browser programs,", 
  target: "subtitlediv"
})
.subtitle({
  start: 780.555, 
  end: 782.507, 
  text: "the same way Google has done it.", 
  target: "subtitlediv"
})
.subtitle({
  start: 782.507, 
  end: 786.525, 
  text: "But Mozilla wants one that works on different browsers, said Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 786.525, 
  end: 801.59, 
  text: "We see the Internet move away from Web pages to Web programs (applications).", 
  target: "subtitlediv"
})
.subtitle({
  start: 801.59, 
  end: 807.543, 
  text: "The last couple of years we have talked a lot about 'app stores', i.e. online stores selling light-weight applications,", 
  target: "subtitlediv"
})
.subtitle({
  start: 807.543, 
  end: 811.564, 
  text: "which typically can be downloaded and installed on your smartphone or tablet.", 
  target: "subtitlediv"
})
.subtitle({
  start: 811.564, 
  end: 818.508, 
  text: "Until recently, that mostly happened on the mobile phone, where iPhone and Android of course are the biggest players,", 
  target: "subtitlediv"
})
.subtitle({
  start: 818.508, 
  end: 824.514, 
  text: "even though there are also app stores for the other platforms - BlackBerry, Symbian, Windows Mobile, etc.", 
  target: "subtitlediv"
})
.subtitle({
  start: 824.514, 
  end: 830.509, 
  text: "Apple has also made an app store for Mac software on their desktop computers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 830.509, 
  end: 835.566, 
  text: "Where the mac store is actually an integrated part of the OS.", 
  target: "subtitlediv"
})
.subtitle({
  start: 835.566, 
  end: 845.539, 
  text: "But now we will also use the web apps in our browsers, says among others Google and now Mozilla.", 
  target: "subtitlediv"
})
.subtitle({
  start: 842.539, 
  end: 850.505, 
  text: "A web app is in reality - like many mobile apps -, 'just', a special wrapper for websites,", 
  target: "subtitlediv"
})
.subtitle({
  start: 850.505, 
  end: 854.526, 
  text: "which makes it easy and straightforward to use the relatively sophisticated pages that exist out there.", 
  target: "subtitlediv"
})
.subtitle({
  start: 854.526, 
  end: 859.556, 
  text: "But when the programs move into the browser, you don't have to buy physical boxes of applications", 
  target: "subtitlediv"
})
.subtitle({
  start: 859.556, 
  end: 864.545, 
  text: "on CDs,wrapped in cardboard and plastic and what have we, says Tristan Nitot.", 
  target: "subtitlediv"
})
.subtitle({
  start: 864.545, 
  end: 874.556, 
  text: "We used to buy things in physical stores wrapped in plastic on a CD -", 
  target: "subtitlediv"
})
.subtitle({
  start: 874.556, 
  end: 879.506, 
  text: "there is still a need for applications, but the way they are distributed is different", 
  target: "subtitlediv"
})
.subtitle({
  start: 879.506, 
  end: 886.558, 
  text: "Google opened its Web App store in December, partly as preparation for the browser-based operating system, Chrome OS,", 
  target: "subtitlediv"
})
.subtitle({
  start: 886.558, 
  end: 893.536, 
  text: "and last week, Mozilla officially presented its project, at a site that is still however primarily directed at developers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 893.536, 
  end: 901.563, 
  text: "When I talked to Tristan Nitot in Paris in December he told about Mozilla's idea to even consider app stores.", 
  target: "subtitlediv"
})
.subtitle({
  start: 901.563, 
  end: 905.516, 
  text: "And there is at least two advantages, he said:", 
  target: "subtitlediv"
})
.subtitle({
  start: 905.516, 
  end: 909.565, 
  text: "The first one is for the user to discover new applications.", 
  target: "subtitlediv"
})
.subtitle({
  start: 909.565, 
  end: 917.566, 
  text: "Maybe you are looking for an application to make a to do list and you get a lot of applications they are all listed in one place.", 
  target: "subtitlediv"
})
.subtitle({
  start: 917.566, 
  end: 921.576, 
  text: "its easy to find and its rated by their users", 
  target: "subtitlediv"
})
.subtitle({
  start: 921.576, 
  end: 929.586, 
  text: "Discovering the applications is a good thing for the user and the vendor that made the application.", 
  target: "subtitlediv"
})
.subtitle({
  start: 929.586, 
  end: 934.51, 
  text: "We have been able to download and buy software on the Internet for many years.", 
  target: "subtitlediv"
})
.subtitle({
  start: 934.51, 
  end: 939.532, 
  text: "But it has not always been easy to find the best applications, or assess whether the applications were worth the money.", 
  target: "subtitlediv"
})
.subtitle({
  start: 939.532, 
  end: 945.538, 
  text: "Therefore it's generally a good idea to assembly sites or shops - and the same is true of course", 
  target: "subtitlediv"
})
.subtitle({
  start: 945.538, 
  end: 949.556, 
  text: "for applications that are meant to run in the browser instead of being installed on the computer.", 
  target: "subtitlediv"
})
.subtitle({
  start: 949.556, 
  end: 953.521, 
  text: "The shops simply makes it easier for users to find the right apps,", 
  target: "subtitlediv"
})
.subtitle({
  start: 953.521, 
  end: 957.513, 
  text: "and easier for developers to have their apps presented to new users.", 
  target: "subtitlediv"
})
.subtitle({
  start: 957.513, 
  end: 963.587, 
  text: "So the idea with online stores is to make it easier to find the right applications,", 
  target: "subtitlediv"
})
.subtitle({
  start: 963.587, 
  end: 967.52, 
  text: "and to make it easier for the developers to make money.", 
  target: "subtitlediv"
})
.subtitle({
  start: 967.52, 
  end: 970.557, 
  text: "Google's Chrome Web store fulfill both needs.", 
  target: "subtitlediv"
})
.subtitle({
  start: 970.557, 
  end: 974.561, 
  text: "But at Mozilla they have not been happy with the way Google has solved the problems.", 
  target: "subtitlediv"
})
.subtitle({
  start: 974.561, 
  end: 978.582, 
  text: "If we take Mozilla's focus on openness and flexibility seriously", 
  target: "subtitlediv"
})
.subtitle({
  start: 978.582, 
  end: 982.542, 
  text: "we have to do things differently, Tristan thinks.", 
  target: "subtitlediv"
})
.subtitle({
  start: 982.542, 
  end: 986.516, 
  text: "It is no use to lock your apps to only one browser,", 
  target: "subtitlediv"
})
.subtitle({
  start: 986.516, 
  end: 990.59, 
  text: "the way it happens on the smartphone market, where an android-app cannot be used on a Nokia phone,", 
  target: "subtitlediv"
})
.subtitle({
  start: 990.59, 
  end: 996.511, 
  text: "and a Nokia app cannot be used on an iPhone, unless the developers make separate versions.", 
  target: "subtitlediv"
})
.subtitle({
  start: 996.511, 
  end: 1001.565, 
  text: "This is why Mozilla wants to make sure that apps you buy from them can be used in different browsers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1001.565, 
  end: 1005.511, 
  text: "The web is not about forcing you to use a single browser.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1005.511, 
  end: 1011.52, 
  text: "You can use several of them - maybe you change your mind over time, because the competitive landscape has changed", 
  target: "subtitlediv"
})
.subtitle({
  start: 1011.52, 
  end: 1021.522, 
  text: "If you buy an application while you use Chrome but you want to be able to use it with Firefox in the future -", 
  target: "subtitlediv"
})
.subtitle({
  start: 1021.522, 
  end: 1025.529, 
  text: "- it has to be an app store that support different browsers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1025.529, 
  end: 1030.527, 
  text: "At first it will mean that as a Chrome user you can install a plug-in,", 
  target: "subtitlediv"
})
.subtitle({
  start: 1030.527, 
  end: 1034.526, 
  text: "a small add-on that makes you able to run Firefox Web applications.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1034.526, 
  end: 1039.577, 
  text: "Secondly, Mozillas other major strategy is open app stores, so everyone can make their own store", 
  target: "subtitlediv"
})
.subtitle({
  start: 1039.582, 
  end: 1045.581, 
  text: "with applications targeted f.x. at photographers, designers, or whoever.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1045.581, 
  end: 1052.56, 
  text: "We would like people to be able to open their own app stores, so a company can start their own shop,", 
  target: "subtitlediv"
})
.subtitle({
  start: 1052.56, 
  end: 1062.527, 
  text: "people can compete and there will be more choice, better quality and more varied services.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1062.527, 
  end: 1067.573, 
  text: "So it's a very open model which reflects the very open nature of the web.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1067.573, 
  end: 1070.597, 
  text: "At the same time you can customize the store to your own wishes,", 
  target: "subtitlediv"
})
.subtitle({
  start: 1070.597, 
  end: 1075.562, 
  text: "so you don't have to subordinate to other companies' more or less reasonable demands, says Tristan,", 
  target: "subtitlediv"
})
.subtitle({
  start: 1075.562, 
  end: 1080.528, 
  text: "with a thinly concealed reference to particularly Apple, which is notoriously infamous", 
  target: "subtitlediv"
})
.subtitle({
  start: 1080.528, 
  end: 1083.568, 
  text: "for their many and obscure terms for developers.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1083.568, 
  end: 1090.526, 
  text: "On the other hand, there are also many who believe that more Web shops leads to fragmentation, confusion and uncertainty,", 
  target: "subtitlediv"
})
.subtitle({
  start: 1090.526, 
  end: 1093.568, 
  text: "kinda like we today see it happening with smartphones.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1093.568, 
  end: 1099.561, 
  text: "While there are 2-3 major companies who sits heavily on the market there are also dozens of smaller app stores", 
  target: "subtitlediv"
})
.subtitle({
  start: 1099.561, 
  end: 1104.525, 
  text: "that it can be hard to find and navigate in; decide whether you trust and so on.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1104.525, 
  end: 1110.579, 
  text: "Whether the possibility of more shops provide greater competition and flexibility, or lead to confusion and chaos, time will tell.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1110.579, 
  end: 1117.58, 
  text: "No matter which model, Tristan is pretty sure that the web app stores are here to stay ...", 
  target: "subtitlediv"
})
.subtitle({
  start: 1117.58, 
  end: 1124.582, 
  text: "Im sure there is a need for app-stores. Is it over-hyped? Maybe. I'm not so sure.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1124.582, 
  end: 1134.537, 
  text: "This was Tristan Nitot from Mozilla's headquarters in Paris. On our website we link to download", 
  target: "subtitlediv"
})
.subtitle({
  start: 1134.537, 
  end: 1140.502, 
  text: "of the latest Firefox browser and Mozilla's project page for the web store.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1140.502, 
  end: 1147.557, 
  text: "This was the end of Harddisken for this time. We will be back next week at 1:03 pm Wednesday and Sunday 4:03 pm", 
  target: "subtitlediv"
})
.subtitle({
  start: 1147.557, 
  end: 1149.574, 
  text: "Until then - so long.", 
  target: "subtitlediv"
})
.subtitle({
  start: 1149.574, 
  end: 1150.555, 
  text: "In the studio Henrik Føhns and Anders Høgh Nissen. Thank you and goodbye.", 
  target: "subtitlediv"
})

}, false); 

/*







}, false);    */