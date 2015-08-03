var titles=['Year', 'NHem', 'SHem'];

var data =[
	{"year": '1880', "nhem": '-33', "shem": '-5'},
	{"year": '1881', "nhem": '-18', "shem": '-2'},
	{"year": '1882', "nhem": '-17', "shem": '-1'},
	{"year": '1883', "nhem": '-30', "shem": '-8'},
	{"year": '1884', "nhem": '-42', "shem": '-12'},
	{"year": '1885', "nhem": '-41', "shem": '-21'},
	{"year": '1886', "nhem": '-39', "shem": '-21'},
	{"year": '1887', "nhem": '-37', "shem": '-28'},
	{"year": '1888', "nhem": '-22', "shem": '-17'},
	{"year": '1889', "nhem": '-16', "shem": '-6'},
	{"year": '1890', "nhem": '-40', "shem": '-33'},
	{"year": '1891', "nhem": '-23', "shem": '-24'},
	{"year": '1892', "nhem": '-30', "shem": '-21'},
	{"year": '1893', "nhem": '-39', "shem": '-19'},
	{"year": '1894', "nhem": '-37', "shem": '-23'},
	{"year": '1895', "nhem": '-28', "shem": '-14'},
	{"year": '1896', "nhem": '-20', "shem": '-8'},
	{"year": '1897', "nhem": '-13', "shem": '-9'},
	{"year": '1898', "nhem": '-28', "shem": '-29'},
	{"year": '1899', "nhem": '-17', "shem": '-15'},
	{"year": '1900', "nhem": '-3', "shem": '-13'},
	{"year": '1901', "nhem": '-8', "shem": '-19'},
	{"year": '1902', "nhem": '-29', "shem": '-23'},
	{"year": '1903', "nhem": '-35', "shem": '-35'},
	{"year": '1904', "nhem": '-45', "shem": '-42'},
	{"year": '1905', "nhem": '-28', "shem": '-26'},
	{"year": '1906', "nhem": '-20', "shem": '-23'},
	{"year": '1907', "nhem": '-46', "shem": '-31'},
	{"year": '1908', "nhem": '-45', "shem": '-39'},
	{"year": '1909', "nhem": '-48', "shem": '-46'},
	{"year": '1910', "nhem": '-43', "shem": '-41'},
	{"year": '1911', "nhem": '-41', "shem": '-47'},
	{"year": '1912', "nhem": '-47', "shem": '-22'},
	{"year": '1913', "nhem": '-42', "shem": '-25'},
	{"year": '1914', "nhem": '-18', "shem": '-13'},
	{"year": '1915', "nhem": '-9', "shem": '-11'},
	{"year": '1916', "nhem": '-35', "shem": '-30'},
	{"year": '1917', "nhem": '-52', "shem": '-26'},
	{"year": '1918', "nhem": '-32', "shem": '-17'},
	{"year": '1919', "nhem": '-32', "shem": '-10'},
	{"year": '1920', "nhem": '-26', "shem": '-24'},
	{"year": '1921', "nhem": '-8', "shem": '-31'},
	{"year": '1922', "nhem": '-25', "shem": '-27'},
	{"year": '1923', "nhem": '-18', "shem": '-27'},
	{"year": '1924', "nhem": '-15', "shem": '-38'},
	{"year": '1925', "nhem": '-7', "shem": '-30'},
	{"year": '1926', "nhem": '4', "shem": '-21'},
	{"year": '1927', "nhem": '-10', "shem": '-29'},
	{"year": '1928', "nhem": '-7', "shem": '-33'},
	{"year": '1929', "nhem": '-30', "shem": '-40'},
	{"year": '1930', "nhem": '2', "shem": '-29'},
	{"year": '1931', "nhem": '5', "shem": '-23'},
	{"year": '1932', "nhem": '-3', "shem": '-30'},
	{"year": '1933', "nhem": '-24', "shem": '-31'},
	{"year": '1934', "nhem": '1', "shem": '-27'},
	{"year": '1935', "nhem": '-8', "shem": '-29'},
	{"year": '1936', "nhem": '-3', "shem": '-26'},
	{"year": '1937', "nhem": '13', "shem": '-16'},
	{"year": '1938', "nhem": '14', "shem": '-18'},
	{"year": '1939', "nhem": '7', "shem": '-13'},
	{"year": '1940', "nhem": '14', "shem": '3'},
	{"year": '1941', "nhem": '16', "shem": '10'},
	{"year": '1942', "nhem": '14', "shem": '6'},
	{"year": '1943', "nhem": '21', "shem": '7'},
	{"year": '1944', "nhem": '28', "shem": '24'},
	{"year": '1945', "nhem": '9', "shem": '16'},
	{"year": '1946', "nhem": '7', "shem": '-12'},
	{"year": '1947', "nhem": '5', "shem": '-12'},
	{"year": '1948', "nhem": '0', "shem": '-18'},
	{"year": '1949', "nhem": '-2', "shem": '-16'},
	{"year": '1950', "nhem": '-16', "shem": '-19'},
	{"year": '1951', "nhem": '5', "shem": '-18'},
	{"year": '1952', "nhem": '5', "shem": '-3'},
	{"year": '1953', "nhem": '22', "shem": '-6'},
	{"year": '1954', "nhem": '-4', "shem": '-20'},
	{"year": '1955', "nhem": '-9', "shem": '-19'},
	{"year": '1956', "nhem": '-25', "shem": '-14'},
	{"year": '1957', "nhem": '4', "shem": '3'},
	{"year": '1958', "nhem": '16', "shem": '-5'},
	{"year": '1959', "nhem": '11', "shem": '-4'},
	{"year": '1960', "nhem": '8', "shem": '-13'},
	{"year": '1961', "nhem": '8', "shem": '3'},
	{"year": '1962', "nhem": '14', "shem": '-9'},
	{"year": '1963', "nhem": '15', "shem": '-3'},
	{"year": '1964', "nhem": '-20', "shem": '-21'},
	{"year": '1965', "nhem": '-13', "shem": '-7'},
	{"year": '1966', "nhem": '0', "shem": '-10'},
	{"year": '1967', "nhem": '3', "shem": '-8'},
	{"year": '1968', "nhem": '-5', "shem": '-9'},
	{"year": '1969', "nhem": '-2', "shem": '14'},
	{"year": '1970', "nhem": '-3', "shem": '9'},
	{"year": '1971', "nhem": '-15', "shem": '-3'},
	{"year": '1972', "nhem": '-18', "shem": '20'},
	{"year": '1973', "nhem": '10', "shem": '20'},
	{"year": '1974', "nhem": '-19', "shem": '4'},
	{"year": '1975', "nhem": '-5', "shem": '2'},
	{"year": '1976', "nhem": '-21', "shem": '-2'},
	{"year": '1977', "nhem": '12', "shem": '24'},
	{"year": '1978', "nhem": '2', "shem": '12'},
	{"year": '1979', "nhem": '8', "shem": '26'},
	{"year": '1980', "nhem": '16', "shem": '39'},
	{"year": '1981', "nhem": '39', "shem": '27'},
	{"year": '1982', "nhem": '6', "shem": '21'},
	{"year": '1983', "nhem": '26', "shem": '35'},
	{"year": '1984', "nhem": '5', "shem": '27'},
	{"year": '1985', "nhem": '0', "shem": '25'},
	{"year": '1986', "nhem": '14', "shem": '25'},
	{"year": '1987', "nhem": '27', "shem": '41'},
	{"year": '1988', "nhem": '37', "shem": '43'},
	{"year": '1989', "nhem": '29', "shem": '29'},
	{"year": '1990', "nhem": '51', "shem": '36'},
	{"year": '1991', "nhem": '41', "shem": '44'},
	{"year": '1992', "nhem": '12', "shem": '33'},
	{"year": '1993', "nhem": '20', "shem": '29'},
	{"year": '1994', "nhem": '36', "shem": '27'},
	{"year": '1995', "nhem": '58', "shem": '34'},
	{"year": '1996', "nhem": '28', "shem": '42'},
	{"year": '1997', "nhem": '53', "shem": '42'},
	{"year": '1998', "nhem": '73', "shem": '54'},
	{"year": '1999', "nhem": '52', "shem": '32'},
	{"year": '2000', "nhem": '51', "shem": '33'},
	{"year": '2001', "nhem": '64', "shem": '46'},
	{"year": '2002', "nhem": '71', "shem": '56'},
	{"year": '2003', "nhem": '72', "shem": '52'},
	{"year": '2004', "nhem": '67', "shem": '42'},
	{"year": '2005', "nhem": '84', "shem": '55'},
	{"year": '2006', "nhem": '80', "shem": '47'},
	{"year": '2007', "nhem": '83', "shem": '49'},
	{"year": '2008', "nhem": '66', "shem": '42'},
	{"year": '2009', "nhem": '71', "shem": '59'},
	{"year": '2010', "nhem": '88', "shem": '55'},
	{"year": '2011', "nhem": '71', "shem": '50'},
	{"year": '2012', "nhem": '77', "shem": '50'},
	{"year": '2013', "nhem": '76', "shem": '56'},
	{"year": '2014', "nhem": '91', "shem": '58'},
];

$(document).ready(function () {
	var xTicks = data.length/8 + 1;

	var vis = d3.select('#visualisation'),
	    WIDTH = 200,
	    HEIGHT = 100,
	    MARGINS = {
	      top: 10,
	      right: 20,
	      bottom: 20,
	      left: 20
	    },
	    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(data, function(d) {
	      return d.year;
	    }), d3.max(data, function(d) {
	      return d.year;
	    })]),
	    yRange = d3.scale.linear().range([HEIGHT - MARGINS.bottom, MARGINS.top]).domain([d3.min(data, function(d) {
	      return Math.min(d.nhem, d.shem);
	    }), d3.max(data, function(d) {
	      return Math.max(d.nhem, d.shem);
	    })]),
	    xAxis = d3.svg.axis()
	      .scale(xRange)
	      .ticks(xTicks)
	      .tickSize(2)
	    yAxis = d3.svg.axis()
	      .scale(yRange)
	      .tickSize(2)
	      .orient('left');
	 
	var lineFunc = d3.svg.line()
	  .x(function(d) {
	    return xRange(d.year);
	  })
	  .y(function(d) {
	    return yRange(d.nhem);
	  })
	  .interpolate('basis');

	vis.append('svg:path')
	  .attr('d', lineFunc(data))
	  .attr('stroke', 'blue')
	  .attr('stroke-width', 0.25)
	  .attr('fill', 'none');

	lineFunc = d3.svg.line()
	  .x(function(d) {
	    return xRange(d.year);
	  })
	  .y(function(d) {
	    return yRange(d.shem);
	  })
	  .interpolate('basis');

	vis.append('svg:path')
	  .attr('d', lineFunc(data))
	  .attr('stroke', 'red')
	  .attr('stroke-width', 0.25)
	  .attr('fill', 'none');

	vis.append('svg:g')
	  .attr('class', 'x axis')
	  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
	  .call(xAxis);
	 
	vis.append('svg:g')
	  .attr('class', 'y axis')
	  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
	  .call(yAxis)

	vis.append("text")      // text label for the x axis
        .attr("x", (WIDTH/2) )
        .attr("y",  HEIGHT - (MARGINS.bottom/2) )
        .style("font-size", "3") 
        .text("Year");

	vis.append("text")      // text label for the x axis
        .attr("x", 0)
        .attr("y", (HEIGHT/2))
		.style("font-size", "3") 
        .text("Deviation");

	vis.append("text")
		.attr("x", (WIDTH / 2))             
		.attr("y", MARGINS.top/2)
		.attr("text-anchor", "middle")  
		.style("font-size", "4") 
		.style("text-decoration", "underline")  
		.text("Mean Land-Ocean Temperature deviation in .01 degrees Celsius from selected 1950-1980 zonal means");

	var legend = vis.append('svg')
					.attr("x", (MARGINS.left + 8))
					.attr("y", (MARGINS.top + 5))
					.attr("viewBox", "0,0,200,100")
					.attr("height", 20)
					.attr("width", 50);

	legend.append("line")
	  .attr("x1", 5)
	  .attr("x2", 90)
	  .attr("y1", 5)
	  .attr("y2", 5)
	  .attr('stroke', 'blue')
	  .attr('stroke-width', 1)
	  .attr('fill', 'none');

	legend.append("line")
	  .attr("x1", 5)
	  .attr("x2", 90)
	  .attr("y1", 35)
	  .attr("y2", 35)
	  .attr('stroke', 'red')
	  .attr('stroke-width', 1)
	  .attr('fill', 'none');

	legend.append("text")      // text label for the x axis
        .attr("x", 95)
        .attr("y", 10)
		.style("font-size", "12") 
        .text("Southern Hemisphere");

	legend.append("text")      // text label for the x axis
        .attr("x", 95)
        .attr("y", 38)
		.style("font-size", "12") 
        .text("Northern Hemisphere");

});