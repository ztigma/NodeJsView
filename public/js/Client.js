function iOS() 
{
  return [
	'iPad Simulator',
	'iPhone Simulator',
	'iPod Simulator',
	'iPad',
	'iPhone',
	'iPod'
	].includes(navigator.platform)
	||
	/iPhone|iPad|iPod/i.test(navigator.userAgent)
	|| 
	(navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
String.prototype.URI_TO_OBJ = function()
{
	let path = this;
	let divided = path.split('?');

	let variables = divided[1].split('&');
	let r = {};
	variables.forEach
	(
		function(v)
		{
			let name_value = v.split('=');
			r[name_value[0]] = name_value[1];
		}
	);
	return r;

}
String.prototype.OBJ_TO_URI = function(obj)
{
	let r = '';
	let counter = 0;
	Object.keys(obj).forEach
	(
		function(name)
		{
			if(counter == 0)
			{
				r += `${name}=${obj[name]}`;
			}
			else
			{
				r += `&${name}=${obj[name]}`;
			}
			counter++;
		}
	);
	return `${this}?${r}`;
}
async function async_timeout(ms)
{
	return new Promise
	(
		function(callback)
		{
			setTimeout
			(
				function(id)
				{
					callback(id)
				}
				,
				ms
			);
		}
	)
}


var is_alert = false;

var alert = function(res)
{
	if(is_alert)
	{
		return;	
	}
	if(res == undefined || res == 'undefined')
	{
		return;
	}
	
 	let div = document.createElement("div");

	div.setAttribute('_view','div');
	div.setAttribute('_orientation','vertical_center');
	div.setAttribute('onclick','this.remove(); is_alert = false;')
	
	div.style.setProperty('position','fixed');
	div.style.setProperty('top','0');
	div.style.setProperty('left','0');
	div.style.setProperty('width','100vw');
	div.style.setProperty('height','100vh');
	div.style.setProperty('background-color','rgb(0,0,0,0.5)');
	div.style.setProperty('color','white');

	div.innerHTML = res;

	is_alert = true;
	
	document.body.append(div);	
}
String.prototype.TO_FLOAT = function() {
	return parseFloat(this);
}
String.prototype.PROPS = function(props) {
	a = this;
	Object.keys(props).forEach
		(
			function(n) {
				a = a.replaceAll("<!--" + n + "-->", props[n]);
				a = a.replaceAll("/*" + n + "*/", props[n]);
				a = a.replaceAll("__" + n + "__", props[n]);
			}
		)
	return a
}
FormData.prototype.TO_OBJECT = function()
{
	var object = {};
	this.forEach
	(
		function(value, key)
		{
	    	object[key] = value;
		}
	);
	return object;
}
var rect = {
	get get() {
		return document.body.getBoundingClientRect();
	}
};
class User {
	get token() {
		return localStorage.token;
	}
	set token(value) {
		return (localStorage.token = value);
	}
	get zoom() {
		if (localStorage.zoom) {
			return localStorage.zoom.TO_FLOAT();
		}
		else {
			localStorage.zoom = rect.get.height;
			return localStorage.zoom.TO_FLOAT();
		}
	}
	set zoom(value) {
		return (localStorage.zoom = value.toString());
	}
	Exit(path) {
		//console.log('Exit');
		localStorage.token = '';
		Redirect(path);
	}
}

const user = new User();

/*
addEventListener
	(
		'keydown'
		,
		function(e) {
			console.log(e.key);
			if (e.key == '0') {
				localStorage.zoom = rect.get.height;
			}
		}
	);
*/
var currency = '€';

console.log(navigator.language);



window.addEventListener('load', function() {
	OnStart();
});

var is_phone = function() {
	return window.innerHeight > window.innerWidth;
}
var is_phone_memo = undefined;

function OnStart() {

	//c.offsetParent
	//console.log('Start');
	OnPostAction();
	localStorage.zoom = rect.get.height;
	_remove_phone();
	_Click_Event_Child();
	_Get_Start();
	_child_attribute();
	_child_style();
	_pick();
	_pick_remove();
	_omni_validation();
	MaxCount();
	_by_path();
	_inner_html();
	_req_send();
	_on_in();
	
	OnValueStart();
	TokenLoading();
	
	SolucionarSelectsForms();//estas aqui.
	
	///EntradaLoading();
	FinishLoading();//este muestra el formulario	
	
	onstart();

	start.forEach(n => n());
	
	TriggerUpdate();

	console.log("entrada:");
	console.log(localStorage.entrada);

	console.log(location.pathname);
}
function onstart()
{
	let w = document.querySelectorAll('[onstart]')
	w.forEach
	(
		function(n)
		{
			let js = n.getAttribute('onstart');
			js = js.PROPS
			({
				this:n.getAttribute('id')
			})
			eval(js);
		}
	)
}
//CREA UN METODO QUE SOLUCIONE EL PROBLEMA DE FORMS Y SELECTS
function SolucionarSelectsForms()
{	
	let w = document.querySelectorAll('form');
	
	console.log('Formularios:');
	console.log(w);
	
	w.forEach
	(
		function(form)
		{
			let buttons = form.querySelectorAll('button');
			let select = form.querySelector(':scope > select');

			console.log('select');
			console.log(select);
			
			buttons.forEach
			(
				function(button)//a probar xd
				{//okok
					button.setAttribute('disabled', '');
					button.setAttribute('memo_back', button.style.getPropertyValue('background-color'));
					button.style.setProperty('background-color', 'rgb(211,213,214)');
				}
			);

			
			
			// para client no hace falta reiniciar el server por si.
			let change = form.getAttribute('onchange');	
			keyup = (
				`
					console.log('onchange form');
					let proto_promise = [];
					let selects = this.querySelectorAll('select');
					let inputs = this.querySelectorAll('input');
					let pass = this.querySelectorAll('[sha256=true]');
	 				let email = this.querySelectorAll('[type=email]');

  					inputs.forEach
	   				(
						function(input)
	  					{
							if(input.getAttribute('memo_color'))
							{
	   							
							}
							else
							{
								let memo_color = input.style.getPropertyValue('color');
								input.setAttribute('memo_color', memo_color);
							}

							if(input.value == 'undefined' || input.value == '')
							{
								input.style.setProperty('border-bottom', '1px solid #df9aab');
								proto_promise.push
								({
									element:input
									,
									data:false
								})
							}
							else
							{
								input.style.setProperty('border-bottom', '1px solid ' + 'transparent');
								proto_promise.push
								({
									element:input
									,
									data:true
								})
							}
						}
					)
  
					selects.forEach
					(
						function(select)
						{
							if(select.getAttribute('memo_color'))
							{
	   
							}
							else
							{
								let memo_color = select.style.getPropertyValue('color');
								select.setAttribute('memo_color', memo_color);
							}					
	   
							if(select.value == 'undefined' || select.value == '')
							{
								select.style.setProperty('border-bottom', '1px solid #df9aab');
								proto_promise.push
								({
									element:select
									,
									data:false
								})
							}
							else
							{
								select.style.setProperty('border-bottom', '1px solid transparent');
								proto_promise.push
								({
									element:select
									,
									data:true
								})
							}
						}
					)

					if(pass.length >= 2)
	   				{

						if(pass[0].value == '' || pass[0].value == 'undefined' || pass[1].value == '' || pass[1].value == 'undefined')
	  					{
   
	  						pass[0].style.setProperty('border-bottom', '1px solid #df9aab');
	   						pass[1].style.setProperty('border-bottom', '1px solid #df9aab');
		 					
							proto_promise.push
							({
								element:pass[0]
								,
								data:false
							})
						}
	  					else 
						{
	  						if(pass[0].value == pass[1].value)
		  					{
								pass[0].style.setProperty('border-bottom', '1px solid ' + 'transparent');
			 					pass[1].style.setProperty('border-bottom', '1px solid ' + 'transparent');
	 
								proto_promise.push
								({
									element:pass[0]
									,
									data:true
								})
							}
		  					else
							{
	   
		  						pass[0].style.setProperty('border-bottom', '1px solid #df9aab');
		   						pass[1].style.setProperty('border-bottom', '1px solid #df9aab');
			 					
								proto_promise.push
								({
									element:pass[0]
									,
									data:false
								})
							}
						}
					}

  					email.forEach
	   				(
						function(n)
	  					{
							let b = new RegExp('[a-zA-Z0-9]@[a-zA-Z0-9].[a-zA-Z0-9]').test(n.value);//me rindo no recuerdo como poner el punto [.]
	   						console.log('email:');
		  					console.log(b);
	   						if(b)
		  					{
		 						n.style.setProperty('border-bottom', '1px solid ' + 'transparent');
								proto_promise.push
								({
									element:n
									,
									data:true
								})
							}
	   						else
		  					{
		 						n.style.setProperty('border-bottom', '1px solid #df9aab');
								proto_promise.push
								({
									element:n
									,
									data:false
								})
							}
						}
					)
  
					let find = proto_promise.find(n => n.data == false);
					if(find)
					{
						let buttons = this.querySelectorAll('button');
						buttons.forEach
						(
							function(button)
							{
								button.setAttribute('disabled', '');
								button.style.setProperty('background-color', 'rgb(211,213,214)');
							}
						)
					}
					else
					{
						let buttons = this.querySelectorAll('button');
						buttons.forEach
						(
							function(button)
							{
								button.removeAttribute('disabled', '');
								button.style.setProperty('background-color', button.getAttribute('memo_back'));
							}
						)
					}
				`//jajajaja
			);//deberia hacerle su funcion en vez de string pero el tiempo apremia xddd

			change += keyup;
			form.setAttribute('onchange', change);
			form.setAttribute('onkeyup', keyup);

			var event = new Event('change');
			form.dispatchEvent(event);
			
			
		}
	)
}
function TokenLoading ()//esto tiene que ver con seguridad (se injecta cierta data a todos los form)
{
	var w = document.querySelectorAll('[_token_loading=true]');
	w.forEach
	(
		function(n)
		{
			n.innerHTML += `<input name="token" value="${localStorage.token}" style="display: none;"/>`;
			n.innerHTML += `<input name="type" value="login" style="display: none;"/>`;
		}
	);
}
function EntradaLoading ()//esto tiene que ver con seguridad (se injecta cierta data a todos los form)
{
	var w = document.querySelectorAll('form');
	w.forEach
	(
		function(n)
		{			
			n.innerHTML += `<input name="entrada" value="${localStorage.entrada}" style="display: none;"/>`;
			n.innerHTML += `<input name="type_entrada" value="entrada" style="display: none;"/>`;
		}
	);
}
function FinishLoading ()
{
	var w = document.querySelectorAll('[_onloading=true]');
	w.forEach
	(
		function(n)
		{
			n.setAttribute('_onloading', 'false');
		}
	);
}
function OnPostAction ()
{
	var w = document.querySelectorAll('form[method]');
	w.forEach
	(
		function(n)
		{
			var action = n.getAttribute('action');
			var phone = window.innerHeight > window.innerWidth;
			if(localStorage.la)
			{

			}
			else
			{
				localStorage.la = 'es';
			}
			
			if(action.includes('?'))
			{
				let path = `${action}&la=${localStorage.la}&phone=${phone}`;
				let prevent = `la=${localStorage.la}&phone=${phone}`;
				
				if(action.includes(prevent))
				{
					
				}
				else
				{
					let b = n.getAttribute('no_params') == 'true';
					if(b)
					{
						
					}
					else
					{
						n.setAttribute('action', path);
					}
				}
			}
			else
			{
				let path = `${action}?la=${localStorage.la}&phone=${phone}`;
				let prevent = `la=${localStorage.la}&phone=${phone}`;
				
				if(action.includes(prevent))
				{
					
				}
				else
				{
					let b = n.getAttribute('no_params') == 'true';
					if(b)
					{
						
					}
					else
					{
						n.setAttribute('action', path);
					}
				}
			}
		}
	);
}
function OnValueStart()
{
	var w = document.querySelectorAll(`select[value]`);

	w.forEach
	(
		function(n)
		{
			var val = n.getAttribute('value');
			if(val == 'dataprofile')
			{
				
			}
			else
			{
				n.value = val;
				//eval(n.getAttribute('onchange'));
			}
		}
	);
}
function OnValueCmd()
{
	var w = document.querySelectorAll(`select[value]:not(select[is_value_cmd=true])`);

	w.forEach
	(
		function(n)
		{
			var val = n.getAttribute('value');
			if(val == 'dataprofile')
			{
				
			}
			else
			{
				var option = n.querySelector(`option[value="${val}"]`);
				if(option)
				{
					n.value = val;
					n.setAttribute('is_value_cmd', 'true');
					eval(n.getAttribute('onchange'));
				}
				else
				{

				}
			}
		}
	);
}
function OnCmd()
{
	OnValueCmd();
	var event = new Event('change');
	var forms = document.querySelectorAll('form');
	forms.forEach
	(
		function(form)
		{
			form.dispatchEvent(event);
		}
	);
}
function OnValueUpdate()
{
	var w = document.querySelectorAll(`select[value]:not(select[is_value_update=true])`);

	w.forEach
	(
		function(n)
		{
			var val = n.getAttribute('value');
			if(val == 'dataprofile')
			{
				
			}
			else
			{
				var option = n.querySelector(`option[value="${val}"]`);
				if(option)
				{
					n.value = val;
					n.setAttribute('is_value_update', 'true');
					//eval(n.getAttribute('onchange'));
				}
				else
				{
					//eval(n.getAttribute('onchange'));
				}
			}
		}
	);
}
function _on_in() {
	var w = document.querySelectorAll('*[_on_in_target]');
	w.forEach
		(
			function(n) {
				var _on_in_target = n.getAttribute("_on_in_target");
				var primero = document.querySelectorAll(_on_in_target);
				n.addEventListener('click', function(event) {
					primero.forEach
						(
							function(f) {
								f.setAttribute("_on_in", "false");
							}
						)
					n.setAttribute("_on_in", "true");

				});
			}
		)
}
function _req_send() {
	var w = document.querySelectorAll('*[_send]');

	console.log('_req_send');

	w.forEach(function(n) {
		var send = n.getAttribute('_send');

		n.addEventListener('click', function(event) {
			var _send_onclick = n.getAttribute("_send_onclick");
			eval(_send_onclick);
			var req = document.querySelector(`${send}`);
			var method = req.getAttribute('method');
			var link = req.getAttribute('link');
			var body = '';

			var recursive_req = function(children) {
				if (children.length == 0) {
					return;
				} else {
					for (let i = 0; i < children.length; i++) {
						c = children[i];
						var name = c.name ? c.name : c.getAttribute('name');
						var value = c.value ? c.value : c.getAttribute('value');
						var _is_data = c.getAttribute('_is_data');

						if (_is_data) {
							console.log('is_data');
							console.log(name);
							console.log(value);
							if (name && value) {
								body += `${name}=${value}&`;
							}
						}
						recursive_req(c.children);
					}
				}
			};

			//console.log(req);
			//console.log(req.childNodes);

			recursive_req(req.childNodes);

			Cmd(
				function(data) {
					console.log('data send');
				},
				method,
				link + `&token=${user.token}`,
				body
			);
		});
	});
}
//function Cmd(callback, method, link, body) {
function myMap() {
	//@-22.8935148,13.8687876,6z
	var mapProp = {
		center: new google.maps.LatLng(-22.8935148, 13.8687876),
		zoom: 6
	};
	var w = document.querySelector('*[_map=self]');
	console.log(w);
	var map = new google.maps.Map(w, mapProp);
}
function _inner_html() {
	var w = document.querySelectorAll('*[_inner_html]');
	w.forEach(function(n) {
		var q = n.getAttribute('_inner_html');
		var data = n.getAttribute('_inner_html_data');
		var go = document.querySelector(q);
		go.innerHTML = data;
	});
}
var zoom = 1;
var zoom_memo = zoom;
var control = false;

var Zm = function() {
	return rect.get.width / screen.width;
};

function Do_Zoom_Update() {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		return;
	}

	zoom = user.zoom / rect.get.height;

	if (zoom != zoom_memo) {
		if (zoom < 0) {
			zoom = 0;
		}
		if (zoom > 2) {
			zoom = 2;
		}

		var s = document.querySelectorAll("*:not([_background='true'])");

		s.forEach(function(n) {
			'width'.SetWithZoom(n);
			'height'.SetWithZoom(n);
			'font-size'.SetWithZoom(n);
			'--w'.SetWithZoom(n);
			'--h'.SetWithZoom(n);
			'--font_size'.SetWithZoom(n);
			'padding'.SetWithZoom(n);
			'--padding'.SetWithZoom(n);
			'--padding_phone'.SetWithZoom(n);
		});
		zoom_memo = zoom;
	}
}

String.prototype.SetWithZoom = function(n) {
	w = n.style.getPropertyValue(this);
	if (w == 'auto') {
		return;
	}

	if (w) {
		if (this.includes('--')) {
			var m = n.style.getPropertyValue(`${this}_memo`);
			if (m) {
			} else {
				m = w;
				n.style.setProperty(`${this}_memo`, m);
			}
			n.style.setProperty(this, m.ClearNumber(c => c * zoom));
		} else {
			var m = n.style.getPropertyValue(`--${this}_memo`);
			if (m) {
			} else {
				m = w;
				n.style.setProperty(`--${this}_memo`, m);
			}
			n.style.setProperty(this, m.ClearNumber(c => c * zoom));
		}
	}
};

String.prototype.ClearNumber = function(predicate) {
	if (this.includes('%') || this.includes('px')) {
		return this;
	}

	var med = '';
	if (this.includes('vh')) {
		med = 'vh';
	}
	if (this.includes('vw')) {
		med = 'vw';
	}
	if (this.includes('%')) {
		med = '%';
	}
	/*
	if (this.includes('px')) {
		med = 'px';
	}
	*/
	return predicate(this.replace(med, '')) + med;
};

/*
function _prevent()
{
	var s = document.querySelectorAll(`*[_prevent]`);
	s.forEach
	(
		function(n)
		{	
			n.addEventListener
			(
				'keydown'
				,
				function(e)
				{
					var compare = new RegExp(n.getAttribute("_prevent"));
					var b = compare.test(e.key);
					if(b)
					{
						//console.log("true");
						return true;
					}
					else
					{
						//console.log("false");
						return false;
					}
				}
			);
		}
	)
}
*/
function _remove_phone() {
	var s = document.querySelectorAll(`*[_remove_phone]`);

	s.forEach(function(n) {
		var g = n.getAttribute('_remove_phone');
		//console.log(g);
		if (g) {
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				// true for mobile device
				n.style.setProperty('display', 'none');
			} else {
				// false for not mobile device
			}
		}
	});
}
function MaxCount() {
	var w = document.querySelectorAll('*[_max_count]');

	w.forEach(function(n) {
		var b = false;

		var max_count = 1;

		n.addEventListener('keydown', function(e) {
			max_count = parseInt(n.getAttribute('_max_count'));
			//console.log('max');
			//console.log(max_count);
			//console.log(n.value.length);

			b = n.value.length >= max_count;

			//console.log(b);

			if (b) {
				n.value = n.value.slice(0, -1);
			}
		});

		n.addEventListener('keyup', function(e) {
			//console.log('keyup');

			b = n.value.length >= max_count;

			n.setAttribute('_is_max', b.toString());
		});
	});
}
//+264 (81) 243 5858
function PhoneFormat(
	input //onkeyup
) {
	if (event.key == 'Backspace') {
		return;
	}

	var a = input.value.length == 2;

	if (a) {
		input.value = input.value + '-';
	}

	var b = input.value.length == 8;

	if (b) {
		input.value = input.value + '-';
	}
}

function Cmd(callback, method, link, body, headers) {
	var req = new XMLHttpRequest();

	var phone = window.innerHeight > window.innerWidth;
	
	if(link.includes('?'))
	{
		link += '&la=' + localStorage.la + '&phone=' + phone;
	}
	else
	{
		link += '?la=' + localStorage.la + '&phone=' + phone;
	}

	console.log('link:');
	console.log(link);
	
	req.open(method, link, true);

	req.onreadystatechange = function() //cmd
	{
		if (req.readyState != 4 || req.status != 200) {
			callback(undefined);
			OnCmd();
			return;
		}
		callback(req.responseText);
		OnCmd();
	};

	if (headers) {
		console.log(headers);
		headers.forEach
			(
				function(n) {
					console.log('n');
					console.log(n);
					req.setRequestHeader(n.name, n.value);
				}
			);
		
	}
	else {
		req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	}

	if (typeof body == undefined) {
		req.send();
	} else {

		req.send(body);
	}
}
function _omni_validation() {
	var w = document.querySelectorAll('*[_validation]');

	w.forEach(function(n) {
		var _is_server = n.getAttribute('_is_server');
		var _validation_true = JSON.parse(n.getAttribute('_validation_true'));
		var _validation_false = JSON.parse(n.getAttribute('_validation_false'));
		var _validation_eval = n.getAttribute('_validation_eval');

		var _is_cellphone = n.getAttribute('_is_cellphone');

		if (_is_cellphone) {
			var target_q = n.getAttribute('_validation_target'); //value
			var target = document.querySelector(`${target_q}`);
			var call_code = document.querySelector(`input[name=call_code]`);
			//if(server(compare) == target.value)

			//console.log('call_code');
			//console.log(call_code.value);

			target.addEventListener('keyup', function(e) {
				//console.log('funciona_-1');

				/*
								var cellphone = req.query.cellphone;
								var cellphone_value = req.query.cellphone_value;
							
								var call_code = req.query.call_code;
								var call_code_value = req.query.call_code_value;
								*/

				Cmd(
					function(r) {
						if (r == 'true') {
							Object.keys(_validation_true).forEach(function(vt) {
								n.style.setProperty(vt, _validation_true[vt]);
								n.setAttribute('_current_validate', 'true');
							});
							//n.style.setProperty('color', 'green');
						} else {
							Object.keys(_validation_false).forEach(function(vt) {
								n.style.setProperty(vt, _validation_false[vt]);
								n.setAttribute('_current_validate', 'false');
							});
							//n.style.setProperty('color', 'red');
						}
						eval(_validation_eval);
					},
					'get',
					`/db_cellphone?cellphone=${target.value
					}&call_code=${call_code.value.replace('+', '%2b')}`
				);
			});

			return;
		}

		if (_is_server) {
			var target_q = n.getAttribute('_validation_target'); //value
			var target = document.querySelector(`*${target_q}`);
			//if(server(compare) == target.value)

			target.addEventListener('keyup', function(e) {
				//console.log('funciona_0');
				var compare = n.getAttribute('_validation'); //email_address

				Cmd(
					function(r) {
						if (r == 'true') {
							Object.keys(_validation_true).forEach(function(vt) {
								n.style.setProperty(vt, _validation_true[vt]);
								n.setAttribute('_current_validate', 'true');
							});
							//n.style.setProperty('color', 'green');
						} else {
							Object.keys(_validation_false).forEach(function(vt) {
								n.style.setProperty(vt, _validation_false[vt]);
								n.setAttribute('_current_validate', 'false');
							});
							//n.style.setProperty('color', 'red');
						}
						eval(_validation_eval);
					},
					'get',
					`/db?name=${compare}&value=${target.value}`
				);
			});
		} else {
			var target_q = n.getAttribute('_validation_target');
			var target = document.querySelector(`${target_q}`);
			var _is_match = n.getAttribute('_is_match');

			if (_is_match) {
				target.addEventListener('keyup', function(e) {
					var compare = new RegExp(n.getAttribute('_validation'));
					//console.log('funciona_1');

					var b = compare.test(target.value);

					if (b) {
						Object.keys(_validation_true).forEach(function(vt) {
							n.style.setProperty(vt, _validation_true[vt]);
							n.setAttribute('_current_validate', 'true');
						});
						//n.style.setProperty('color', 'green');
					} else {
						Object.keys(_validation_false).forEach(function(vt) {
							n.style.setProperty(vt, _validation_false[vt]);
							n.setAttribute('_current_validate', 'false');
						});
						//n.style.setProperty('color', 'red');
					}
				});
			} else {
				target.addEventListener('keyup', function(e) {
					var compare = new RegExp(n.getAttribute('_validation'));
					//console.log('funciona_2');

					var b = target.value.split('').findIndex(c => compare.test(c)) > -1;

					if (b) {
						Object.keys(_validation_true).forEach(function(vt) {
							n.style.setProperty(vt, _validation_true[vt]);
							n.setAttribute('_current_validate', 'true');
						});
						//n.style.setProperty('color', 'green');
					} else {
						Object.keys(_validation_false).forEach(function(vt) {
							n.style.setProperty(vt, _validation_false[vt]);
							n.setAttribute('_current_validate', 'false');
						});
						//n.style.setProperty('color', 'red');
					}
				});
			}
		}

		//document.addEventListener('keyup', logKey);
	});
}
async function sha256(message) {
	// encode as UTF-8
	const msgBuffer = new TextEncoder().encode(message);
	// hash the message
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
	// convert ArrayBuffer to Array
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	// convert bytes to hex string                  
	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}
async function form_sha_256(t) {
	var w = t.querySelectorAll('[sha256=true]');
	console.log('')
	w.forEach
		(
			async function(n) {
				var value = await sha256(n.value);
				n.setAttribute('value', value);
				n.value = value;
			}
		);
	
	setTimeout
		(
			function() {
				t.submit();
			}
			,
			1000
		);
}
function Vali_Number(input) {
	var compare = /^[0-9]+$/;
	return input.value.split('').findIndex(n => compare.test(n)) > -1;
}
function Vali_Text(input) {
	var compare = /^[A-Za-z]+$/;
	return input.value.split('').findIndex(n => compare.test(n)) > -1;
}
function Vali_Symbols(input) {
	var compare = /^[,-.]+$/;
	return input.value.split('').findIndex(n => compare.test(n)) > -1;
}
function Validate(input, rule) {
	var compare = rule;
	return input.value.split('').findIndex(n => compare.test(n)) > -1;
}

/*
var m_pay = (${_calculator_value_name}_value - m_initial_pay) / ${_calculator_repayment_term_name}_value / 12 * 2 * CurrentFee(${_calculator_repayment_term_name}_value) * (1 + ${_calculator_interest_rate_name}_value / 100);
*/
function CalculatorFormulaCarlos(p, r, n) {
	var formula = (p * (r / 12) * (1 + r / 12) ** n) / (1 + r / 12) ** n;
	return formula;
}

function CurrentFee(years) {
	return 1 + years / 100;
}
function _restart() {
	setInterval(() => {
		Start('loop start');
	}, 3000);
}
function _pick_remove() {
	//console.log('_pick_remove');

	var p = document.querySelectorAll('*[_pick_is_enable]');
	p.forEach(function(o) {
		var papa_query = o.getAttribute('_pick_remove');
		var q = o.getAttribute('_pick_remove');
		var targets = document.querySelectorAll(q);

		o.addEventListener('click', function(event) {
			event.stopPropagation(); //evita clickear al parent

			targets.forEach(function(t) {
				t.setAttribute('_is_enable', 'true');
			});

			var papas = document.querySelectorAll(papa_query);

			papas.forEach(function(n) {
				n.setAttribute('_is_enable', 'false');
			});
		});
	});
}
function _pick() {
	//console.log('pick');

	var p = document.querySelectorAll('*[_pick]');
	p.forEach(function(o) {
		var q = o.getAttribute('_pick');
		var targets = document.querySelectorAll(q);

		//console.log(targets.length);
		//console.log(targets);

		o.addEventListener('click', function(event) {
			targets.forEach(function(t) {
				t.setAttribute('_selected', 'false');
			});
			o.setAttribute('_selected', 'true');
		});
	});
}
function inter_onclick(q) {
	var w = document.querySelectorAll(q);
	w.forEach(function(n) {
		n.click();
	});
}
function _recursive_child_attribute(n, r) {
	if (n.length == 0) {
		return;
	}

	for (let u = 0; u < n.length; u++) {
		var c = n[u];
		r.forEach(function(cada) {
			var _ex = c.getAttribute('_ex');

			if (_ex == '_child_attribute') {
				return;
			} else if (_ex == '_child_attribute_' + cada.name) {
				return;
			}

			c.setAttribute(cada.name, cada.value);
			//console.log('_recursive_child_attribute: ' + cada.name + ' = ' + cada.value);
		});
		_recursive_child_attribute(c.children, r);
	}
}
function _recursive_child_style(n, r) {
	if (n.length == 0) {
		return;
	}

	//console.log(r);

	for (let u = 0; u < n.length; u++) {
		var c = n[u];
		r.forEach(function(cada) {
			var _ex = c.getAttribute('_ex');

			if (_ex == '_child_style') {
				return;
			} else if (_ex == '_child_style_' + cada.name) {
				return;
			}

			c.style.setProperty(cada.name, cada.value);
			//console.log('_recursive_child_style: ' + cada.name + ' = ' + cada.value);
		});
		_recursive_child_style(c.children, r);
	}
}
function _child_attribute() {
	//console.log('_child_attribute');

	var w = document.querySelectorAll('*[_child_attribute]');

	//console.log(w.length);

	w.forEach(function(n) {
		var _type = n.getAttribute('_child_attribute');

		var i = 0;
		var name = n.getAttribute('_child_attribute_name_' + i);
		var value = n.getAttribute('_child_attribute_value_' + i);

		var r = [];

		while (name && value) {
			r.push({ name: name, value: value });
			i++;
			name = n.getAttribute('_child_attribute_name_' + i);
			value = n.getAttribute('_child_attribute_value_' + i);
		}

		if (_type == 'recursive') {
			_recursive_child_attribute(n.children, r);
		} else if (_type == 'true') {
			for (let u = 0; u < n.children.length; u++) {
				var c = n.children[u];
				r.forEach(function(cada) {
					var _ex = c.getAttribute('_ex');

					if (_ex == '_child_attribute') {
						return;
					} else if (_ex == '_child_attribute_' + cada.name) {
						return;
					}

					c.setAttribute(cada.name, cada.value);
					//console.log('_child_attribute: ' + cada.name + ' = ' + cada.value);
				});
			}
		}
	});
}
function _child_style() {
	//console.log('_child_style');

	var w = document.querySelectorAll('*[_child_style]');

	//console.log(w.length);

	w.forEach(function(n) {
		var _type = n.getAttribute('_child_style');

		var i = 0;
		var name = n.getAttribute('_child_style_name_' + i);
		var value = n.getAttribute('_child_style_value_' + i);

		var r = [];

		while (name && value) {
			r.push({ name: name, value: value });
			i++;
			name = n.getAttribute('_child_style_name_' + i);
			value = n.getAttribute('_child_style_value_' + i);
		}

		if (_type == 'recursive') {
			_recursive_child_style(n.children, r);
		} else if (_type == 'true') {
			for (let u = 0; u < n.children.length; u++) {
				var c = n.children[u];
				r.forEach(function(cada) {
					var _ex = c.getAttribute('_ex');

					if (_ex == '_child_style') {
						return;
					} else if (_ex == '_child_style_' + cada.name) {
						return;
					}

					c.style.setProperty(cada.name, cada.value);
					//console.log('_child_style: ' + cada.name + ' = ' + cada.value);
				});
			}
		}
	});
}
function Cmd_Get(e) {
	var _get_name = e.getAttribute('_get_name');

	var q = e.getAttribute('_get_target');
	var targets = document.querySelectorAll(q);

	targets.forEach(function(n) {
		var t = n.getAttribute('_get_vars');

		//console.log(t);

		var _get_vars = JSON.parse(t);
		_get_vars[_get_name] = e.value;

		var j = JSON.stringify(_get_vars);
		n.setAttribute('_get_vars', j);

		var _get = n.getAttribute('_get');

		var r = '';

		Object.keys(_get_vars).forEach(function(o) {
			r += o + '=' + _get_vars[o] + '&';
		});

		var link = _get + r;

		//console.log(link);

		Cmd(
			function(object) {
				n.innerHTML = object;
			},
			'get',
			link,
			undefined
		);
	});
}
function _Get_Start() {
	var s = document.querySelectorAll(`*[_get_start]`);
	s.forEach(function(n) {
		var _get_start = n.getAttribute('_get_start');
		if (_get_start) {
			var _get = n.getAttribute('_get');
			Cmd(
				function(object) {
					n.innerHTML = object;
				},
				'get',
				_get
			);
		}
	});
}
function _Click_Event_Child() {
	var s = document.querySelectorAll(`*[_click_event]`);

	s.forEach(function(n) {
		n.addEventListener('click', function(e) {
			var q = n.getAttribute('_click_event');
			var c = document.querySelectorAll(q);
			c.forEach(n => n.click());
		});
	});
}
function Recursive_Replace_Color(n, name, value) {
	if (n.length == 0) {
		return;
	}

	for (let i = 0; i < n.length; i++) {
		var c = n[i];
		var _ex = c.getAttribute('_ex_color');

		if (_ex) {
			continue;
		}

		c.style.setProperty(name, value);
		Recursive_Replace_Color(c.children, name, value);
	}
}
//var s = document.querySelectorAll(`*[_click='self']`);
function SetAttribute(order) {
	var s = document.querySelectorAll(order.query);
	//console.log(s.length);
	s.forEach(n => n.setAttribute(order.name, order.value));
}
function GetAttribute(order) {
	var s = document.querySelector(order.query);
	return s.getAttribute(order.name);
}
function SetStyle(order) {
	var s = document.querySelectorAll(order.query);
	s.forEach(function(n) {
		n.style.setProperty(order.name, order.value);
	});
}
function GetStyle(order) {
	var s = document.querySelector(order.query);
	return s.getProperty(order.name);
}



const current_path = window.location.pathname;

function _by_path() {
	var w = document.querySelectorAll('*[_by_path]');

	w.forEach(function(n) {
		var p = JSON.parse(n.getAttribute('_by_path'));

		var i = p.findIndex(s => s == current_path);

		if (i == -1) {
			return;
		}

		var d = n.getAttribute('_by_path_data');
		var dj = JSON.parse(d);

		Object.keys(dj).forEach(function(k) {
			var v = dj[k];
			n.style.setProperty(k, v);
		});
	});
}
function Redirect(path) {
	window.location.replace(window.location.origin + path);
}
function Redirect_Token(path) {
	//console.log('Redirect_Token');

	window.location.replace(
		window.location.origin + path + '?token=' + user.token
	);
}
function Check_Token() {
	//console.log(user.token);

	//console.log(user.token.toString().length);

	if (user.token.toString().length != 0) {
		Redirect_Token(current_path);
	}
}
function ReloadOrientation() {

	//console.log('is_phone_memo');

	if (is_phone() != is_phone_memo) {

		//console.log('is_phone_memo');
		//console.log(is_phone_memo);


		var phone = window.innerHeight > window.innerWidth;

		if (location.href.toString().includes('phone=true')) {
			if (phone) {

			}
			else {
				window.location.replace(location.pathname);
			}
		}
		else {
			if (phone) {
				window.location.replace(location.pathname);
			}
			else {

			}
		}

		is_phone_memo = is_phone();
	}
}
function onVisible(element, callback) {
	new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				callback(true);
			}
			else {
				callback(false);
			}
		});
	}).observe(element);
}
function _on_update() {
	var w = document.querySelectorAll('[onupdate]');

	w.forEach
		(
			function(n) 
			{
				var update = n.getAttribute('onupdate');
				update = update.PROPS
				({
					this:n.getAttribute('id') 
				})
				
				if (update) 
				{
					eval(update);
				}
			}
		);
}
var is_auto_orientation = false;
function Update() {
	Do_Zoom_Update();
	One_Shot();
	if(is_auto_orientation)
	{
		ReloadOrientation();
	}
	_on_update();
	OnValueUpdate();

	if(localStorage.token == undefined || localStorage.token == 'undefined' || localStorage.token == '')
	{
		
	}
}
function One_Shot() {
	var w = document.querySelectorAll('[one_shot]');
	w.forEach
		(
			function(n) {
				var one_shot = n.getAttribute('one_shot');
				var is_shot = n.getAttribute('is_shot');
				var b = is_shot == 'true';
				if (b) {
					eval(one_shot);
					n.setAttribute('is_shot', 'false');
				}
			}
		);
}
function Opacity() {
	var w = document.quertSelectorAll('*[_opacity]');

	w.forEach(function(n) {
		var is_opacity = n.getAttribute('_opacity');
		var delay = n.getAttribute('_opacity_delay').TO_NUMBER();
		var opacity_current = n.getAttribute('_opacity_current').TO_NUMBER();

		if (is_opacity == 'true') {
			opacity_current += opacity_current.SLERP(0, delay);
		} else {
			opacity_current += opacity_current.SLERP(1, delay);
		}

		if (opacity_current < 0.05) {
			opacity_current = 0;
		}
		if (opacity_current > 0.95) {
			opacity_current = 1;
		}
	});
}
function AutoOpacityDisplay() {
	var w = document.querySelectorAll('*[_active]');
	w.forEach(function(n) {
		//console.log(n.style.getPropertyValue('opacity'));
		var b = n.style.getPropertyValue('opacity') == '0';
		n.setAttribute('_is_enable', b);

		var trigger_q = n.getAttribute('_active_trigger');

		if (trigger_q) {
			var trigger_o = document.querySelectorAll(trigger_q);

			trigger_o.forEach(function(o) {
				if (b) {
					o.setAttribute('_active', 'true');
				}
			});
		}
	});
}
var start = [];
var update = [];
var resize = [];

var is_update = false;
var is_resize = false;

var time = 0;
var speed = 30;

function TriggerUpdate() {
	if (is_update) {
		return;
	}

	//console.log('TriggerUpdate()');

	update.push(Update);

	setInterval(() => {
		InvokeUpdate();
	}, 1000 / speed);

	is_update = true;
}
function InvokeUpdate() {
	var w = update;
	time += 1000 / speed;
	w.forEach(n => n.call());
}
function TriggerResize() {
	if (is_resize) {
		return;
	}
	window.onresize = InvokeResize;
	is_resize = true;
}
function InvokeResize() {
	var r = resize;
	r.forEach(n => n.Update());
}
function Position() {
	var p = document.querySelectorAll('*[_to="true"]');
	p.forEach(function(n) {
		var x = n.getAttribute('_x').TO_NUMBER();
		var y = n.getAttribute('_y').TO_NUMBER();
		var x_to = n.getAttribute('_x_to').TO_NUMBER();
		var y_to = n.getAttribute('_y_to').TO_NUMBER();

		x += x.SLERP(x_to, 3);
		n.style.left = x + 'vw';
		n.setAttribute('_x', x);

		y += y.SLERP(y_to, 3);
		n.style.top = y + 'vh';
		n.setAttribute('_y', y);
	});
}
Number.prototype.SLERP = function(to, delay) {
	return (to - this) / delay;
};
String.prototype.TO_NUMBER = function() {
	return Number.parseFloat(this);
};
function Auto_Display() {
	var s = document.querySelectorAll('*[_auto_display]');

	s.forEach(function(n) {
		var is_auto = n.getAttribute('_auto_display');
		if (is_auto) {
			var query_target = n.getAttribute('_auto_display_target');
			var targets = document.querySelectorAll(query_target);
			targets.forEach(function(t) {
				if (t.innerHTML == 'undefined') {
					n.style.display = 'none';
				} else {
					n.style.setProperty('display', 'flex');
				}
			});
		}
	});
}