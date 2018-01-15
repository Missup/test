document.writeln("<header>");
document.writeln("		<span class=\'header-left\'>logo</span>");
document.writeln("		<span class=\'header-right\'></span>");
document.writeln("	</header>");
document.writeln("	<aside>");
document.writeln("		<ul>");
document.writeln("			<li>1</li>");
document.writeln("			<li>2</li>");
document.writeln("			<li>3</li>");
document.writeln("			<li>4</li>");
document.writeln("			<li>5</li>");
document.writeln("		</ul>");
document.writeln("	</aside>");


$(function () {
	$('.header-right').click(function() {
		$('aside').toggle()
	});
})