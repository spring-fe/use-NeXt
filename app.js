(function (nx){
	var App = nx.define(nx.ui.Application, {
		methods: {
			start: function(){
				var model = new ContactViewModel();
				var view = new ContactView();

				view.model(model);
				view.attach(this);
			}
		}
	});
	var app = new App();
	app.start();
})(nx);


nx.define('Contact', nx.data.ObservableObject, {
	properties: {
		name: null
	},
	methods: {
		init: function(options){
			this.inherited();
			this.sets(options);
		},
		showInfo: function(){
			alert(this.name());
		}
	}
})
nx.define('ContactView', nx.ui.Component, {
	view: {
		content:[
			{
				tag:'input',
				props:{
					'class':'input-search',
					value:'{filterKey}',
					placeholder: 'Search...'
				}
			},
			{
				tag: 'ul',
				props: {
					'class':'contact-list',
					template: {
						tag: 'li',
						events:{
							click:'{showInfo}'
						},
						content: '{name}'
					},
					items:'{filteredContacts}'
				}
			}
		]
	}
})

var contacts = [{name:"Abu Aikepaer"}, {name:"Li Kang"}, {name:"Siqi Ling"},{name:"Wei  Qiao"},{name:"Xiaobao Shi"},{name:"Edwin Zhang"}];
nx.define('ContactViewModel', nx.data.ObservableObject, {
	properties: {
		contacts: null,
		filteredContacts: null,
		filterKey: {
			get: function(){
				return this._filterKey;
			},
			set: function(value){
				this._filterKey = value;
				this.filter(value);
			}
		}
	},
	methods: {
		init: function(){
			this.inherited();
			this.contacts(new nx.data.ObservableCollection());
			this.filteredContacts(new nx.data.ObservableCollection());
			this.load(contacts);
		},
		load: function(contacts){
			contacts.forEach(function(item){
				this.contacts().add(new Contact(item));
				this.filter(null);
			}, this);
		},
		filter:function(key){
			this.filteredContacts().clear();
			this.contacts().each(function(contact){
				if(!key || contact.name().toLowerCase().indexOf(key) >= 0){
					this.filteredContacts().add(contact);
				}
			}, this);
		}
	}
})