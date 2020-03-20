describe ('Thermostat', function(){
    
    var thermostat

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
        expect(thermostat.getTemp()).toEqual(20);
    });

    it('increase temperature', function(){
        thermostat.up();
        expect(thermostat.getTemp()).toEqual(21);
    });

    it('increase temperature', function(){
        thermostat.down();
        expect(thermostat.getTemp()).toEqual(19);
    });

    it('cannot lower temperature beyond 10 deg', function(){
        for(var i=0; i<11; i++) {
            thermostat.down();
        }
        expect(thermostat.getTemp()).toEqual(10);
    });

    it('power saving mode is on at start', function(){
        expect(thermostat.isPowerSave()).toBe(true);
    });

    it('power saving mode can be switched off', function(){
        thermostat.drainMyPower();
        expect(thermostat.isPowerSave()).toBe(false);
    });

    it('power saving mode can be switched on', function(){
        thermostat.drainMyPower();
        expect(thermostat.isPowerSave()).toBe(false);
        thermostat.saveMyPower();
        expect(thermostat.isPowerSave()).toBe(true);
    });

    it('can reset the temp to 20deg', function(){
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getTemp()).toEqual(20);
    });


    describe('when power save mode is on', function(){

        it('temp cannot be raised above 25deg', function(){
            for(var i=0; i<6; i++) {
                thermostat.up();
            }
            expect(thermostat.getTemp()).toEqual(25);
        });
    });

    describe('when power save mode is off', function(){
        
        beforeEach(function(){
            thermostat.drainMyPower();
        });

        it('temp cannot be raised above 25deg', function(){
            for(var i=0; i<13; i++) {
                thermostat.up();
            }
            expect(thermostat.getTemp()).toEqual(32);
        });

        it('shows usage is low when temp is under 18 deg', function(){
            for(var i=0; i<3; i++) {
                thermostat.down();
            }
            expect(thermostat.usage()).toEqual('Low');
        });

        it('shows usage is medium when temp is between 18 and 25 deg', function(){
           
            expect(thermostat.usage()).toEqual('Medium');
        });

        it('shows usage is high when temp is over 25 deg', function(){
            for(var i=0; i<13; i++) {
                thermostat.up();
            }
            expect(thermostat.usage()).toEqual('High');
        });

        


    });

   

});