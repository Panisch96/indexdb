		
		'use strict';
		var server;
		
		db.open({
		server: 'test',
		version: 1,
		schema: {
			player: {
				key:{ keyPath: 'id', autoIncrement: true},
				indexes: {
					name: {},
					status: {},
					total: {}
					}
				}
			}
		}).done( function(s){
			console.log("DB geöffnet");
			server = s
			
			
		});
		
		var add = function(obj){	//alles ok	
			
				server.player.add({
					nrplayer: obj.nrplayer,
					name: obj.name,
					status: obj.status,
					total: obj.total,
					anzplayer: obj.anzplayer
				}).done( function() {
						console.log("Eintrag erstellt");
					});
			}
		var modify = function(status, zahl, index){
				server.player.query()
				.filter('nrplayer', index)
				.modify({
					status: status,
					total: zahl
				})
				.execute()
				.done(function(results) {
					console.log("Eintrag aktualisiert");
				});

			}
		
		var readall = function(){	//alles ok
			var ergebnis = [];	
			server.player.query()
			.all()
			.execute()
			.done( function(result) {
				console.log(result);
				ergebnis.push(result);
				
			});
				return ergebnis;
			}
		var readone = function(index){
		
			server.player.query()
			.filter('nrplayer', index)
			.execute()
			.done( function(result) {
				console.log(result);
				
				
			});
			
		}
			
		var removeall = function(){	//alles ok
				
				server.player.clear()
				.done(function() {
					console.log("Removed all!");
				});
			}
