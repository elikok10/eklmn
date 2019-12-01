{
	"button": {
		"show": true,
		"text": "Request a callback"
	},
	"fields": [
		{
			"type": "text",
			"name": "Ваше имя",
			"placeholder": "Введите Ваше имя",
			"required": true,
			"sms": true
		},
		{
			"type": "email",
			"name": "Ваш E-mail",
			"placeholder": "Введите Ваш E-mail",
			"required": false,
			"sms": true
		},
		{
			"type": "tel",
			"mask": "(999) 999-9999",
			"name": "Ваш телефон",
			"required": true,
			"sms": true
		},
		{
			"type": "select",
			"name": "Необходимая услуга",
			"sms": true,
			"required": true,
			"options": [
				"Демонтаж",
				"Монтаж унитаза, биде, писсуара",
				"Душевые кабины",
				"Монтаж. Ванны и душивые колонки",
				"Монтаж раковин, моек - без смесителей",
				"Смесители",
				"Полотенцесушители",
				"Фильтры для отчистки воды",
				"Монтаж счетчиков воды и приборов с систему водоснобжения",
				"Монтаж и подключение бытовой техники",
				"Монтаж радиатров отопления и конвекторов",
				"Замена труб и стояков. Монтаж.",
				"Нарезка резьбы на трубы",
				"Штробление по сантехнические трубы",
				"Ремонтсантехнической коммуникаций, навеска акксессуаров",
				"Сантехнические работы. Коэффициенты"
			]
		},
		{
			"type": "textarea",
			"name": "Заявка",
			"placeholder": "Введите заявку",
			"required": true,
			"sms": true
		},
		{
			"type": "checkbox",
			"name": "Gift case",
			"caption": "You need to <a href='#'>read the rules</a> and check this",
			"required": true,
			"sms": true
		}
	],
	"form": {
		"template": "default",
		"title": "Request a callback",
		"button": "Call me",
		"align": "center",
		"welcome": "Fill in the form and we'll call you back as soon as possible"
	},
	"alerts": {
		"yes": "Yes",
		"no": "No",
		"process": "Sending request...",
		"success": "Your request was successfully sent",
		"fails": {
			"required": "Please fill in all required fields",
			"sent": "Previous message was sent less than a minute ago"
		}
	},
	"captcha": {
		"show": true,
		"title": "Captcha",
		"error": "Captcha is wrong"
	},
	"license": {
		"key": "422033305436423430283020423433305122272633304820421830205426",
		"show": true
	},
	"mail": {
		"referrer": "Page referrer",
		"url": "URL",
		"linkAttribute": "Link attribute",
		"smtp": false
	},
	"animationSpeed": 150,
	"sms": {
		"send": false,
		"captions": true,
		"cut": true
	}
}
