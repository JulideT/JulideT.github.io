var vueapp = new Vue({
  el: '#vueapp',
  data: {
    members: [
		{ imgsrc: 'images/j_martinez.jpg', name: 'J.L. Martinez', desc: 'President, 27 Consulting' },
		{ imgsrc: 'images/ben_abama.jpg', name: 'Ben Amaba, PhD', desc: 'Worldwide Executive, PE, CPIM®, LEED® AP' },
		{ imgsrc: 'images/tommy_boroughs.jpg', name: 'Tommy Boroughs', desc: 'Partner, Holland & Knight, LLP' },
		{ imgsrc: 'images/timothy_bryant.png', name: 'Timothy L. Bryant', desc: 'PE, Senior Manager External Affairs, NextEra Energy, Inc.' },
		{ imgsrc: 'images/gustavo_cepero.jpg', name: 'Gustavo R. Cepero', desc: 'Vice President, Florida Crystals Corporation' },
		{ imgsrc: 'images/christopher_%20fountas.jpg', name: 'Christopher Fountas', desc: 'Partner, Arsenal Venture Partners' },
		{ imgsrc: 'images/nick_gladding.jpg', name: 'Nick Gladding', desc: 'Attorney at Law, PA' },
		{ imgsrc: 'images/jennifer_grove.jpg', name: 'Jennifer Grove', desc: 'Community Development Manager, Gulf Power Company' },
		{ imgsrc: 'images/dan_holladay.jpg', name: 'Dan Holladay', desc: 'Executive Director, BRIDG, University of Central Florida ORC' },
		{ imgsrc: 'images/byron_knibbs.jpg', name: 'Byron A. Knibbs', desc: 'Vice President, Sustainable Services Dept, Orlando Utilities Commission' },
		{ imgsrc: 'images/tom_lawery.jpg', name: 'Tom Lawery', desc: 'Wholesale Renewables Manager, Distributed Energy Resources, Duke Energy' },
		{ imgsrc: 'images/roy-periana.png', name: 'Roy Periana', desc: 'Director, Scripps Energy Laboratories' },
		{ imgsrc: 'images/tom_hernandez.png', name: 'Thomas L. Hernandez', desc: 'Senior Vice President, Business Strategy and Renewables, Tampa Electric Company' },
		{ imgsrc: 'images/jeremy_susac.jpg', name: 'Jeremy L. Susac', desc: 'Vice President, Government Affairs, Lennar Ventures' },
		{ imgsrc: 'images/paul_zombo.jpg', name: 'Paul Zombo P.E.', desc: 'Manager, Gas Turbine Engineering' }
    ]
  }
})

/* Vue app for footer component */
var footerApp = new Vue({
  el: '#footer-app',
  data: {  }
})
