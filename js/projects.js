$(document).ready(function() {
	TweenMax.set('.project-preview', { width: 0 });

	var tl = new TimelineLite();

	$(document)
		.on('mouseover', '.navigation-item', function(evt) {
			tl = new TimelineLite();
			tl.to($('.project-preview'), 1, {
				width: '900px',
				ease: Expo.easeInOut
			});
		})
		.on('mouseout', '.navigation-item', function(evt) {
			tl = new TimelineLite();
			tl.to($('.project-preview'), 0.5, {
				width: 0,
				ease: Expo.easeInOut
			});
		});
});

$('.navigation-link-1').hover(function() {
	$('.project-preview').css({
		'background-image': 'url(images/simplefilms2.jpg)'
	});
});

$('.navigation-link-2').hover(function() {
	$('.project-preview').css({ 'background-image': 'url(images/pt2.jpg)' });
});

$('.navigation-link-3').hover(function() {
	$('.project-preview').css({ 'background-image': 'url(images/favNote.jpg)' });
});

$('.navigation-link-4').hover(function() {
	$('.project-preview').css({ 'background-image': 'url(images/currency.jpg)' });
});

$('.navigation-link-5').hover(function() {
	$('.project-preview').css({ 'background-image': 'url(images/img-5.jpg)' });
});
