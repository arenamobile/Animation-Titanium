//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	var button = Ti.UI.createButton({
		title: 'Animate',
		width: 'auto',
		height: 'auto'
	});
	self.add(button);
	
	button.addEventListener('click', function(e) {
		label.animate({
			top: 60,
			duration: 400 
		}, funcRotateAndScale);
	});

	var funcRotateAndScale = function() {
		var matrix = Ti.UI.create2DMatrix()
  		matrix = matrix.rotate(180);
  		matrix = matrix.scale(2, 2);
  		
  		var a = Ti.UI.createAnimation({
    		transform : matrix,
   			duration : 600,
    		autoreverse : true,
    		repeat : 2
  		});
  		label.animate(a);
	};

	return self;
}

module.exports = FirstView;
