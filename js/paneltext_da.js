document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_1')
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
		     start: 1, // seconds
				end: 9, // seconds
				text: 'Vil du høre indslaget på Engelsk? Skift til engelsk mens du lytter ovenfor',
				target: 'footnote'
			}) 
			 .footnote({ 
				start: 10, // seconds
				end: 20, // seconds
				text: 'Denne demo er baseret på indslag der blev sendt <a href="http://www.dr.dk/harddisken/blog/2011/03/04/mozilla-app-butikker-allevegne/" target="_blank">4. Marts 2011</a>, i <a href="http://www.dr.dk/harddisken/" target="_blank">HARDDISKEN</a>',
				target: 'footnote'
			})
			     .footnote({
			       start: 21, // seconds
			       end: 31, // seconds
			       text: 'Denne demo "åbner" Harddisken ved hjælp af <a href="http://www.w3.org/html/logo/" target="_blank">HTML5</a> audio og <a href="http://www.popcornjs.org/"target="_blank">Popcorn.js</a>, som forbinder lyden med nettet og når en international lytterskare.',
			       target: 'footnote'
			     })
			     .footnote({
			       start: 32, // seconds
			       end: 48, // seconds
			       text: 'Vært og reporter Anders Hoeg Nissen interviewer <a href="http://standblog.org/" target="_blank">Tristan Nitot</a>, europæisk præsident hos <a href="http://mozilla.org/"target="_blank">Mozilla</a> Europa, om Firefox 4 og Mozillas, for-frem- og nutid.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 51, // seconds
			       end: 61, // seconds
			       text: 'Anders delte også sine noter til dette indslag.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 62, // seconds
			       end: 100, // seconds
			       text: 'Du kan <a href="http://www.henrikmoltke.dk/hyperdisken/hyperdisken.zip" target="_blank">downloade</a> hele indslaget som zip-fil og redigere med <a href="http://nsaka.com/" target="_blank">Hindenburg</a> (700mb)',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 101, // seconds
			       end: 180, // seconds
			       text: '.. og læse <a href="https://castingwords.com/store/transcript/Q1s/83777.html" target="_blank">en tekst-version</a> af selve kildeinterviewet.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 181, // seconds
			       end: 240, // seconds
			       text: 'Anders læste denne artikel <a href="http://kara.allthingsd.com/20110224/video-mozilla-ceo-gary-kovacs-talks-firefox-4-competition-with-googles-chrome-and-more/" target="_blank">Mozilla CEO Gary Kovacs on Google Chrome and more</a> mens hans researchede forud for interviewet.',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 241, // seconds
			       end: 276, // seconds
			       text: 'og skimmede denne artikel fra Wired UK: <a href="http://www.wired.co.uk/magazine/archive/2010/05/features/mozilla-vs-king-corporate" target="_blank">Battle of the browsers: Mozilla vs King corporate</a>',
			       target: 'footnote'
			     })
			        .footnote({
			       start: 286, // seconds
			       end: 300, // seconds
			       text: 'Internet Explorer udkom den 14 marts 2011. Den blev donwnloaded 2.3 millioner gange i løbet af de første 24 timer.',
			       target: 'footnote'
			         })
			        .footnote({
			       start: 301, // seconds
			       end: 310, // seconds
			       text: 'Firefox 4 vlev downloadedet 7.1 millioner gange i de første 24 timer, efterfulgt af hele 8.75 millioner downloads på andendagen. Det gav Firefox en ny Guinness rekord for antal downloads på et døgn.',
			       target: 'footnote'
			         })
			        .footnote({
			       start: 311, // seconds
			       end: 351, // seconds
			       text: 'Firefox 4 nåede 50 millioner downloads den 31. Marts.<a href="http://glow.mozilla.org//" target="_blank">Denne side</a> tracker antallet af Firefox 4 downloads i real-time.',
			       target: 'footnote'
			       })
			      .footnote({
			       start: 352,// seconds
			       end: 659, // seconds
			       text: 'Mozilas tidligere chefdesigner Aza Raskins <a href="http://www.azarask.in/blog/post/privacy-icons/" target="_blank">Privacy Icons projekt</a> søger at gøre det simpelt at se hvad der sker med dine personlige data når du bruger forskellige services og websites.',
			       target: 'footnote'
			         })
			      .footnote({
			       start: 660, // seconds
			       end: 800, // seconds
			       text: 'Firefox Mobile blev lanceret den 29. marts til Android og Maemo telefoner.',
			       target: 'footnote'
			         })
			     .footnote({
			       start: 801, // seconds
			       end: 900, // seconds
			       text: 'Forestil dig at mere radio var tilgængeligt, søgbar og til at dele på nettet..',
			       target: 'footnote'
			         })
			     .footnote({
			       start: 901, // seconds
			       end: 1200, // seconds
			       text: 'Denne demo blev til i samarbejde mellem DR <a href="http://www.dr.dk/harddisken/"target="_blank">HARDDISKEN</a> og <a href="http://www.drumbeat.org/"target="_blank">Mozilla Drumbeat</a>. Snart kommer flere HYPER AUDIO eksperimenter',
			       target: 'footnote'
			     }) 

			// Subtitles
		
			.subtitle({
			  start: 0.027,
			  end: 6.057,
			  text: "Vi skal videre til browseren på vores computer, mobiler og tablets.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 6.057,
			  end: 9.07,
			  text: "Det er et af de vigtigste værktøjer i hverdagen.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 9.07,
			  end: 15.02,
			  text: "Det er i browseren vi læser nyheder, ser TV, checker email, snakker med venner, shopper, booker billetter -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 15.02,
			  end: 18.08,
			  text: "Tusindvis af de ting vi efterhånden gør på nettet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 18.081,
			  end: 23.021,
			  text: "Derfor er det også vigtigt hvilken browser vi bruger, og hvordan den virker.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 23.022,
			  end: 28.035,
			  text: "Den mest udbredte er stadig Internet Explorer fra Microsoft,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 28.035,
			  end: 32.02,
			  text: "men Mozilla’s Firefox har længe været en sikker toer.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 32.02,
			  end: 36.032,
			  text: "Om ganske få dage kommer den officielle version 4 af Firefox browseren,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 36.033,
			  end: 39.097,
			  text: "inklusiv en model til Android-mobiltelefoner.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 39.099,
			  end: 47.059,
			  text: "I den anledning fortæller Tristan Nitot fra Mozillas europæiske hovedkvarter i Paris om Firefox´ historie",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 47.059,
			  end: 50.082,
			  text: "og nogle af de ny funktioner i version 4",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 51.015,
			  end: 56.058,
			  text: "Da vi lancerede Firefox 4 i 2004 var vores mål",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 56.058,
			  end: 60.059,
			  text: "at genskabe valgfrihed og konkurrence på browsermarkedet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 60.071,
			  end: 65.051,
			  text: "For ti års tid siden var det stort set Microsofts Internet Explorer der sad på markedet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 65.053,
			  end: 71.005,
			  text: "Den tidligere populære Netscape var trængt ud, og ellers var der kun mindre nicheprojekter tilbage,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 71.005,
			  end: 77.07900000000001,
			  text: "om det norske Opera og et par år senere Apples Safari, der dog dengang kun fungerede på Mac.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 77.092,
			  end: 82.054,
			  text: "Men ud af ruinerne af Netscape opstod Mozillas Firefox,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 82.05799999999999,
			  end: 87.006,
			  text: "som lancerede en officiel version, 1.0 i november 2004.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 87.006,
			  end: 93.083,
			  text: "dag, lidt over 6 år senere, er Firefox blevet en kæmpe succes, siger Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 94.03399999999999,
			  end: 97.021,
			  text: "Det er lykkedes helt forrygende.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 97.021,
			  end: 102.005,
			  text: "Der er over 400 millioner aktive brugere af Firefox,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 102.023,
			  end: 107.031,
			  text: "Vi har omtrent 25% markedsandel globalt",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 107.047,
			  end: 115.03399999999999,
			  text: "heraf 33% i Europa, og i nogle lande, som f.eks.Polen og  Tyskland nærmer vi os 50%.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 115.03399999999999,
			  end: 118.082,
			  text: "ed successen følger dog også et vist pres.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 118.082,
			  end: 122.02,
			  text: "Firefox var i høj grad med til at skabe opmærksomhed om browsere",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 122.02,
			  end: 125.07300000000001,
			  text: "og tilbød et længe ventet alternativ til Internet Explorer.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 125.07300000000001,
			  end: 132.073,
			  text: "Men samtidig blev ballet åbnet, og idag er der i hvert fald et par håndfulde browsere derude som kæmper om markedet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 132.079,
			  end: 134.09,
			  text: "Det var noget af en bedrift.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 135.058,
			  end: 138.083,
			  text: "Men man skal passe på hvad man ønsker.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 138.083,
			  end: 140.09,
			  text: "Vi ville have konkurrence, og det har vi nu.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 140.09,
			  end: 149.012,
			  text: "For i mellemtiden har andre udbydere begyndt at skabe gode browsere",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 149.012,
			  end: 153.058,
			  text: "I praksis er det dog de fem store, der sidder på brugerne.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 153.058,
			  end: 158.03,
			  text: "Internet Explorer er stadig størst globalt, selvom andelen langsomt bliver mindre.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 158.03,
			  end: 164.02,
			  text: "Dernæst kommer Firefox, Google’s Chrome, Apple’s Safari og den norske Opera -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 164.02,
			  end: 167.026,
			  text: "og så slås resten om nogle ganske få procent af markdet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 168.039,
			  end: 173.015,
			  text: "De helt præcise tal varierer fra måned til måned og alt efter hvilken målemetode der bruges.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 173.015,
			  end: 176.084,
			  text: "Den overordnede udvikling er dog forholdsvis stabil.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 176.084,
			  end: 181.047,
			  text: "Internet Explorer mister stille og roligt brugere, Firefox er en sikker toer,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 181.047,
			  end: 187.037,
			  text: "og så er de alternative browsere som Chrome og Safari og Opera ved at æde sig opad i procenterne.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 187.037,
			  end: 192.05,
			  text: "I de seneste par år er det især Google’s Chrome der har trukket opmærksomhed.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 192.05,
			  end: 195.075,
			  text: "Folkene bag - heriblandt et vigtigt dansk programmørhold -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 195.075,
			  end: 200.064,
			  text: "har især fokuseret på hastighed, at browseren skal være hurtig og vise websiderne hurtigt,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 200.064,
			  end: 207.02100000000002,
			  text: "men efterhånden er der kommet flere og flere features til - senest en web-butik med browserprogrammer og tilføjelser.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 207.02100000000002,
			  end: 214.019,
			  text: "For Tristan Nitot og Mozilla er hovedkonkurrenten dog stadig Microsofts Internet Explorer, siger han.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 214.019,
			  end: 217.011,
			  text: "Vi holder selvfølgelig øje med Google og Chrome",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 217.011,
			  end: 221,
			  text: "Vi er opmærksomme på konkurrencen. Men faktisk er vores mål Internet Explorer",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 221,
			  end: 226.046,
			  text: "I højere grad end Chrome.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 226.046,
			  end: 234.027,
			  text: "Det kan måske virke ulogisk, men hvis du ser på en graf over markedsudviklingen",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 234.027,
			  end: 240.058,
			  text: "vil du at Chrome skader Microsoft og ikke os.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 240.058,
			  end: 245.043,
			  text: "Kigger man på de sidste 2-3 års statistik lader det til at Tristan har ret.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 245.043,
			  end: 253.013,
			  text: "Firefox ligger nogenlunde stabilt mens Chrome siden lanceringen i september 2008 har arbejdet sig op på omkring 10 procent -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 253.013,
			  end: 256.09,
			  text: "- og de procent kommer altså primært fra Internet Explorer.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 256.09,
			  end: 263.06,
			  text: "Omvendt er det nok også ret sandsynligt, at en del af de nye Chrome-brugere faktisk kommer fra Firefox,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 263.06,
			  end: 270.02,
			  text: "mens andre brugere så samtidig har taget springet fra Explorer til Firefox og holdt andelen nogenlunde stabil.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 270.02,
			  end: 273.089,
			  text: "Så vidt så godt.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 273.089,
			  end: 276.073,
			  text: "Men de fine tal må ikke blive en sovepude.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 276.073,
			  end: 283.005,
			  text: "Chrome opdaterer løbende sin browser, og Microsoft har haft  fokus på opdateringen af Explorer de seneste par år,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 283.005,
			  end: 286.07,
			  text: "og har i øvrigt en version 9 på vej inden længe.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 286.07,
			  end: 291.098,
			  text: "Derfor planlægger Mozilla også at sætte sin Firefox version 4 på gaden i løbet af de nærmeste uger",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 291.098,
			  end: 298.077,
			  text: "etaversionerne har været tilgængelige i nogle måneder, og derfor kan Tristan også sagtens fortælle mere om de nye features",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 298.077,
			  end: 302.043,
			  text: "Både i dén version der kommer på gaden nu og på den lidt længere bane.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 303.024,
			  end: 315.041,
			  text: "Du vil bemærke at brugerinterfacet, måden Firefox 4 ser ud på, har udviklet sig betydeligt.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 315.041,
			  end: 318.048,
			  text: "Generelt har der være fokus på at strømline version 4,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 318.048,
			  end: 320.089,
			  text: "både i forhold til hvor hurtigt den loader websiderne",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 320.089,
			  end: 325.01,
			  text: "og i forhold til det interface som brugerne møder, siger Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 325.01,
			  end: 332,
			  text: "Netop enkelhed og effektivitet er blevet vigtige konkurrenceparametre især efter at Google’s Chrome kom på gaden,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 332,
			  end: 336.07,
			  text: "og tidligere Firefox-versioner havde nok en tendens til at føles lidt overlæssede.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 336.07,
			  end: 343.058,
			  text: "En anden ny funktion Tristan gerne vil fremhæve, er de såkaldte App Tabs -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 343.058,
			  end: 345.072,
			  text: "faneblade med websider man ofte har åbne,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 345.072,
			  end: 348.079,
			  text: "og som kan få deres faste plads i browseren, uden at de nødvendigvis fylder en masse.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 349.019,
			  end: 353.065,
			  text: "Det betyder det altid er let, de fylder meget lidt i listen af tabs",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 354.008,
			  end: 358.071,
			  text: "men det er der altid, selvom du har hundredvis af tabs åbne",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 359.038,
			  end: 366.04,
			  text: "så du kan hurtigt checke din status eller sende emails.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 366.08,
			  end: 370.094,
			  text: "Nogle af de nyere alternative browsere som Flock og Rockmelt",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 371.058,
			  end: 377.008,
			  text: "har de seneste par år forsøgt at integrere vores mange sociale netværk direkte i browseren -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 377.008,
			  end: 380.069,
			  text: "- uden at de dog har fået de helt store andele af markedet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 380.069,
			  end: 385.087,
			  text: "Mozilla holder dog øje med dem, for der er ingen tvivl om at sociale aktiviteter",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 385.087,
			  end: 391.084,
			  text: "på Facebook og Twitter og Foursquare og så videre er og bliver meget centrale for brug af nettet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 391.084,
			  end: 400.011,
			  text: "Man har dog ikke bare villet kaste sig ud i det - skal den slags integreres i browseren skal det ske rigtigt, siger Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 400.011,
			  end: 407.068,
			  text: "Vi kan løfte det sociale, men vi har gerne ville gøre det på helt anden vis",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 407.068,
			  end: 414.021,
			  text: "Man har for så vidt også godt kunnet tillade sig at vente. En af de centrale features i Firefox er muligheden for at hvem som helst",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 414.021,
			  end: 419.095,
			  text: "kan lave sine egne tilføjelser til browseren og tilpasse den til egne behov.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 419.095,
			  end: 426.005,
			  text: "Det betyder at man længe har kunne installere tilføjelser der fx netop giver mulighed for at vise Facebook-feeds,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 426.005,
			  end: 431.022,
			  text: "skrive Twitter-beskeder direkte fra browserens adresse-felt og meget, meget mere.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 431.022,
			  end: 439.08,
			  text: "En af grundene til at Mozilla gerne har villet vente lidt med at omfavne ting som Facebook er spørgsmålet om hvem der har adgang til éns data",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 439.08,
			  end: 444.086,
			  text: "- bogmærker, surf-aktiviteter, passwords til diverse tjenester og så videre.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 444.086,
			  end: 448.035,
			  text: "Et eksempel på dén udfordring - og hvordan man vil løse det -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 448.035,
			  end: 452.019,
			  text: "finder man i den nye synkroniseringsfunktion, siger Tristan.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 452.019,
			  end: 456.065,
			  text: "Sync gør det muligt at synkronisere din browser-historik,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 456.065,
			  end: 461.084,
			  text: "dine bogmærker og dine passwords mellem forskellige versioner af Firefox -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 461.09000000000003,
			  end: 471.05,
			  text: "så du har firefox på kontoret, på den bærbare, og endda i lommen, på en Android-telefon.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 471.05,
			  end: 478.007,
			  text: "Synkroniseringen virker endda også på smartphones, hvis man bruger den Firefox-browser til Android-mobiler,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 478.007,
			  end: 482.016,
			  text: "som også er tilgængelig i en betaversion.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 482.016,
			  end: 486.077,
			  text: "Netop mobilbrugere har store fordele ved at kunne bruge bogmærkerne fra computerbrowseren,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 486.077,
			  end: 493.055,
			  text: "fordi man så slipper for at taste alt for mange søgninger og webadresser ind på de forholdsvis små og klodsede mobiltastaturer.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 493.055,
			  end: 497.052,
			  text: "Men for at kunne bruge den slags synkronisering på tværs kræver det jo,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 497.052,
			  end: 500.086,
			  text: "at der bliver gemt oplysninger om éns surferi et eller andet sted på nettet,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 500.086,
			  end: 505.082,
			  text: "så man kan bruge det uanset hvor man surfer fra, så længe man altså er logget ind.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 505.082,
			  end: 512.061,
			  text: "Og løsningen af dét problem har altså ligget Mozilla meget på sinde - det er nemlig ikke optimalt at vigtige oplysninger om os selv",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 512.061,
			  end: 518.099,
			  text: "og vores aktiviteter ligger gemt hos Google, Facebook og andre store private firmaer, mener Tristan.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 518.099,
			  end: 524.076,
			  text: "Nettet handler om deltagelse. Det blev bygget så folk kunne deltage og skabe nye websites",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 524.076,
			  end: 528.065,
			  text: "og bruge indhold, skabe indhold.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 528.065,
			  end: 538.08,
			  text: "Hvis man pludselig har en en privat virksomhed som har så stor indflydelse",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 538.08,
			  end: 543.006,
			  text: "er det ikke skalérbart og ikke rimeligt.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 543.006,
			  end: 549.04,
			  text: "Hvis man bruger den tilsvarende synkroniserings-funktion i Googles Chromebrowser, så ligger alle oplysningerne hos Google.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 549.04,
			  end: 554.069,
			  text: "Det er ikke nødvendigvis en kolossal bekymring hos de mange der i forvejen bruger flere af Googles tjenester,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 554.069,
			  end: 558.025,
			  text: "fra søgninger over Gmail til kort, dokumenter og billeder.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 558.025,
			  end: 562.059,
			  text: "Men for folkene hos Mozilla er det helt centralt, at brugerne selv har kontrol.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 562.059,
			  end: 568.04,
			  text: "Derfor kommer synkroniseringsfunktionen med mulighed for at den teknisk kyndige bruger simpelthen",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 568.04,
			  end: 573.055,
			  text: "kan installere sin egen version af den server som lagrer oplysningerne om éns surferi.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 573.055,
			  end: 580.064,
			  text: "Sync er open source, så du kan installere din egen version af serveren, hvis du vil.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 580.064,
			  end: 588.071,
			  text: "Der er en Mozilla-server hvis du gerne vil have en konto hurtigt, så kan du gøre det.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 588.071,
			  end: 592.096,
			  text: "Og få øjeblikkelig adgang, men du kan køre din egen server hvis du vil.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 592.096,
			  end: 599.061,
			  text: "Det er dog næppe flertallet af brugere der vil gå så vidt. Derfor understreger Tristan også at alle browser-data bliver krypteret,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 599.061,
			  end: 606.051,
			  text: "så det absolut kun er én selv der kan se og bruge dem, fx når de skal synkroniseres med andre maskiner eller mobilbrowseren.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 606.051,
			  end: 611.041,
			  text: "Dét kan selvfølgelig være vigtigt hvis man gemmer på vigtige, personlige oplysninger,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 611.041,
			  end: 615.065,
			  text: "men det er også en slags ideologisk kamp, mener Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 615.065,
			  end: 621.019,
			  text: "For når vi bruger tjenester som Facebook og Google, så betaler vi jo ikke noget i kroner og øre",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 621.019,
			  end: 625.077,
			  text: "op af lommen, men det betyder bestemt ikke at de er gratis, siger han.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 625.077,
			  end: 632.049,
			  text: "Det er  interessant - man kan godt få det indtryk, at det er gratis, men det er det ikke.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 632.049,
			  end: 637.014,
			  text: "Alt vores surferi, alle vores søgninger og så videre bliver tracket og logget,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 637.014,
			  end: 641.075,
			  text: "og på den måde betaler vi for mange af de gratis tjenester med data om os selv og vores adfærd.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 641.075,
			  end: 649.066,
			  text: "Ikke i den forstand at de ansatte hos Google nødvendigvis ved at lige præcis dén individuelle bruger hedder Peter Jensen",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 649.066,
			  end: 652.08,
			  text: "g har besøg dr.dk og klikket på den og den artikel om kongehuset eller hvad det nu er,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 652.08,
			  end: 659.012,
			  text: "men de bagvedliggende systemer ved det, og bruger det typisk til at servere tilpassede og målrettede reklamer for forbrugerne.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 659.012,
			  end: 666.051,
			  text: "Det er et produkt du køber eller foretager en studehandel med til gengæld for dine data.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 666.051,
			  end: 670.056,
			  text: "Det gør vi ikke hos Mozilla, men de fleste i branchen gør det.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 670.056,
			  end: 679,
			  text: "Firmaer som Google skal tjene penge og øge aktiernes værdi, og det er fint nok, det er bare ikke Mozilla’s model",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 679,
			  end: 686.055,
			  text: "Mozilla er en non-profit organisation og indsamler ikke data om brugerne for at vise dem reklamer, og det er vigtigt for os, siger Tristan.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 686.055,
			  end: 695.01,
			  text: "Men sociale tjenester, samarbejde og personlig tilstedeværelse på mange platforme er vigtigt og bliver kun vigtigere, og det ved Mozilla godt.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 695.01,
			  end: 699.078,
			  text: "Derfor kan man også forvente at Mozilla forsøger at løse dén udfordring på sin måde -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 699.078,
			  end: 705.092,
			  text: "- ikke nødvendigvis i den første udgave af den kommende Firefox 4, men snart, lover Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 705.092,
			  end: 718.024,
			  text: "Identitel og 'social' er ekstremt vigtigt at tackle, og du kan forvente noget fra Mozilla i den retning",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 718.024,
			  end: 724.042,
			  text: "Anders, du har leget med betaversionen af Firefox 4?",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 724.042,
			  end: 729.096,
			  text: "Ja og jeg synes faktisk den kører rigtig fint. Specielt hvis man er vant til at bruge Firefox",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 729.096,
			  end: 736.077,
			  text: "Så er den version man kan downloade nu, det er en superfin browser.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 736.077,
			  end: 741.095,
			  text: "Den er super hurtig, og sync-funktionen er spændende at lege med.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 741.095,
			  end: 754.006,
			  text: "Til gengæld lever Android-versionen af Firefox 4 ikke helt op til de andre browsere på Android-platformen.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 754.006,
			  end: 756.034,
			  text: "Den er lidt langsom.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 756.034,
			  end: 759.087,
			  text: "Sammenlignet med tidligere betaversioner er den allerede langt hurtigere og bedre.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 759.087,
			  end: 763.0840000000001,
			  text: "Så jeg er sikker på at de nok skal have en god version klar til den offcielle launch.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 763.0840000000001,
			  end: 767.054,
			  text: "Og det er jo stadig en beta, så der er forbedringer i vente.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 767.054,
			  end: 771.018,
			  text: "Mozilla har lige præsenteret en slags netbutik?",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 771.018,
			  end: 779.055,
			  text: "Ja, Tristan Nitot fortalte om Mozillas idé til en slags fælles appstore for browserprogrammer,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 779.055,
			  end: 781.007,
			  text: "sådan som Google har gjort det.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 781.007,
			  end: 785.025,
			  text: "Men Mozilla vil gerne have en som går på tværs og fungerer på forskellie browsere, fortalte Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 785.025,
			  end: 800.0889999999999,
			  text: "Vi ser nettet udvikle sig væk fra websider til web-programmer (applications).",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 800.0889999999999,
			  end: 806.043,
			  text: "De sidste par år har vi talt utrolig meget om ‘app stores’, altså online-butikker med små programmer",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 806.043,
			  end: 810.064,
			  text: "som man typisk kan downloade og installere på sin smartphone eller tablet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 810.064,
			  end: 817.008,
			  text: "Indtil for nyligt er det mest noget der er sket på mobilen, hvor iPhone og Android jo er de helt store,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 817.008,
			  end: 823.014,
			  text: "selvom der også er programbutikker til de andre platforme - Blackberry, Symbian, Windows Mobile osv.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 823.014,
			  end: 829.009,
			  text: "Apple har også lavet en app-butik til Mac software, på deres skrivebordscomputere.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 829.009,
			  end: 834.066,
			  text: "Hvor mac-butikken ligefrem er en integreret del af styresystemet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 834.066,
			  end: 841.039,
			  text: "Men nu skal vi også til for alvor at bruge web-apps i vores browsere, mener blandt andre Google og altså Mozilla.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 841.039,
			  end: 849.005,
			  text: "En web app er i virkeligheden - ligesom mange mobil-apps - “bare” særlige indpakninger af websites,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 849.005,
			  end: 853.026,
			  text: "som gør det nemt og overskueligt at bruge de forholdsvis avancerede sider derude.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 853.026,
			  end: 858.056,
			  text: "Men når programmerne flytter ind i browseren, så slipper man jo også for at købe kasser med programmer",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 858.056,
			  end: 863.045,
			  text: "som ligger på cd’rommer indpakket i pap og plastik og meget mere, siger Tristan Nitot.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 863.045,
			  end: 873.056,
			  text: "Vi plejede at købe tingene i fysiske butikker indpakket i plastic, på en cd -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 873.056,
			  end: 878.006,
			  text: "der er stadig brug for programmerne, men måden de distribueres på er forskellig",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 878.006,
			  end: 885.058,
			  text: "Google åbnede sin Web App store i december, blandt andet som forberedelse til det browser-baserede styresystem, Chrome OS,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 885.058,
			  end: 892.0360000000001,
			  text: "og i sidste uge præsenterede Mozilla officielt sit projekt, på et site som dog stadig primært er henvendt til udviklere.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 892.0360000000001,
			  end: 900.063,
			  text: "Da jeg talte med Tristan Nitot i Paris i december fortalte han om Mozilla’s idé med overhovedet at kaste sig over app stores.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 900.063,
			  end: 904.016,
			  text: "Og der er i hvert fald to fordele, sagde han:",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 904.016,
			  end: 908.065,
			  text: "Den første er at brugeren nemmere kan finde nye programmer.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 908.065,
			  end: 916.066,
			  text: "Måske leder du efter et program til at lave huskesedler, og du får en masse programmer i en liste.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 916.066,
			  end: 920.076,
			  text: "De er nemme at finde og de bliver bedømt af brugerne.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 920.076,
			  end: 928.086,
			  text: "At kunne opdage programmerne er en god ting for brugeren men også for sælgeren, der har lavet programmet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 928.086,
			  end: 933.01,
			  text: "Man har jo kunnet downloade og evt købe software på nettet i mange år.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 933.01,
			  end: 938.032,
			  text: "Det har bare ikke altid været nemt at finde de bedste programmer, eller vurdere om programmerne var pengene værd.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 938.032,
			  end: 944.038,
			  text: "Derfor er det jo generelt en god idé at lave samlesider eller butikker - og det samme gælder naturligvis",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 944.038,
			  end: 948.056,
			  text: "for programmer der skal køre i browseren istedet for at blive installeret på computeren.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 948.056,
			  end: 952.021,
			  text: "Butikkerne gør det ganske enkelt nemmere for brugeren at finde de rigtige apps,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 952.021,
			  end: 956.013,
			  text: "og nemmere for udviklerne at få præsenteret deres apps for nye brugere.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 956.013,
			  end: 962.087,
			  text: "Så ideen med webbutikker er at gøre det nemmere at finde de rigtige programmer,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 962.087,
			  end: 966.02,
			  text: "og gøre det nemmere for uviklerne at tjene penge.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 966.02,
			  end: 969.057,
			  text: "begge dele er sådan set løs i Google's Chrome Web store.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 969.057,
			  end: 973.061,
			  text: "Men folkene hos Mozilla har ikke været tilfredse med den måde Google har løst tingene på.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 973.061,
			  end: 977.082,
			  text: "Skal man tage Mozillas fokus på åbenhed og fleksibilitet alvorligt",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 977.082,
			  end: 981.042,
			  text: "må man gøre tingene på en anden måde, synes Tristan.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 981.042,
			  end: 985.016,
			  text: "Det nytter ikke noget at låse sine apps til kun en browser,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 985.016,
			  end: 989.09,
			  text: "sådan som det sker på smartphonemarkedet, hvor en android-app ikke kan bruges på en Nokia,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 989.09,
			  end: 995.011,
			  text: "og en Nokia-app ikke kan bruges på en iPhone, med mindre udviklerne laver separate versioner.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 995.011,
			  end: 1000.065,
			  text: "Derfor vil Mozilla sørge for at apps man køber hos dem kan bruges på tværs af browsere.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1000.065,
			  end: 1004.011,
			  text: "Nettet handler ikke om at tvinge dig til at bruge en bestemt browser.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1004.011,
			  end: 1010.02,
			  text: "Du kan bruge adskillige - du skifter måske mening med tiden, fordi landskabet har ændret sig",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1010.02,
			  end: 1020.022,
			  text: "Hvis du køber et program mens du bruger Chrome, men du vil gerne bruge det med Firefox i fremtiden -",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1020.022,
			  end: 1024.029,
			  text: "Så skal det være en app butik der understøtter forskellige browsere.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1024.029,
			  end: 1029.027,
			  text: "I første omgang kommer det til at betyde, at man som Chrome-browser-bruger kan installere et plug-in,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1029.027,
			  end: 1033.026,
			  text: "en lille tilføjelse som gør at man kan køre Firefox-webprogrammerne.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1033.026,
			  end: 1038.077,
			  text: "Mozilla’s anden store strategi er er åbne app store-modellen, så alle kan lave deres egen butik,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1038.082,
			  end: 1044.081,
			  text: "med programmer målrettet fotografer, designere, eller hvad det nu kan være.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1044.081,
			  end: 1051.06,
			  text: "Vi vil gerne have at folk selv kan åbne app butikker, så en virksomhed kan starte deres egen butik",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1051.06,
			  end: 1061.027,
			  text: "folk kan konkurrere, og der vil være større udvalg, bedre kvalitet, forskellige tjenester.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1061.027,
			  end: 1066.073,
			  text: "Så det er en meget åben model som spejler nettets meget åbne natur.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1066.073,
			  end: 1069.097,
			  text: "Samtidig kan man også tilpasse butikken sine egne ønsker,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1069.097,
			  end: 1074.062,
			  text: "så man behøver ikke indordne sig under andre firmaers mere eller mindre rimelige krav, siger Tristan,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1074.062,
			  end: 1079.028,
			  text: "med slet skjult henvisning til især Apple, der jo er notorisk berygtet",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1079.028,
			  end: 1082.068,
			  text: "for at stille mange og uigennemskuelige betingelser for udviklerne.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1082.068,
			  end: 1089.026,
			  text: "Omvendt er der også mange der mener, at flere web-butikker fører til fragmentering, forvirring og  usikkerhed,",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1089.026,
			  end: 1092.068,
			  text: "lidt ligesom vi idag ser på smartphoneområdet.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1092.068,
			  end: 1098.061,
			  text: "Der er ganske vist er 2-3 store der sidder tungt på markedet, men der findes også dusinvis af mindre programbutikker",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1098.061,
			  end: 1103.025,
			  text: "som det kan være svært at finde og finde rundt i, vurdere om man stoler på, og så videre.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1103.025,
			  end: 1109.079,
			  text: "Om muligheden for flere butikker giver øget konkurrence og fleksibilitet eller fører til forvirring og kaos, må tiden vise.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1109.079,
			  end: 1116.08,
			  text: "Uanset modellen er Tristan ret sikker på, at web-app-butikkerne er kommet for at blive...",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1116.08,
			  end: 1123.082,
			  text: "Jeg er sikker på at der er behov for app-butikker. Er det over-hypet? Måske. Jeg er ikke så sikker.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1123.082,
			  end: 1133.037,
			  text: "Og det sagde Tristan Nitot fra Mozillas hovedkvarter i Paris. På vores hjemmeside linker vi til download",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1133.037,
			  end: 1139.002,
			  text: "af den nyeste Firefox-browser og Mozillas projektside for web-butikken.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1139.002,
			  end: 1146.057,
			  text: "Det var slut på Harddisken for denne gang. Vi vender tilbage næste uge kl. 13.03 onsdag og søndag 16.03.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1146.057,
			  end: 1148.074,
			  text: "Indtil da er der tilbage at sige på genhør.",
			  target: "subtitlediv"
			})
			.subtitle({
			  start: 1148.074,
			  end: 1153.055,
			  text: "Her I studiet var det Henrik Føhns og Anders Høgh Nissen. Tak for denne gang!",
			  target: "subtitlediv"
			})
   }, false);