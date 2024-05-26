// Component that places cacti where the ground is clicked

export const tapPlaceComponent = {
    schema: {
      min: {default: 6},
      max: {default: 10},
    },
    init() {
      console.log('init');
      const mesh = document.getElementById('mesh')
       const chickenanchor = document.createElement('a-entity')
        chickenanchor.setAttribute('rotation', '90  0  0 ')
        chickenanchor.setAttribute('position', '0  0  0')
        mesh.appendChild(chickenanchor)
      const hub = document.createElement('a-entity')
        //boat.setAttribute('position', '2  -5  0')
        //boat.setAttribute('rotation', '90  0  0')
        hub.setAttribute('rotation', '0 295 0')
        hub.setAttribute('gltf-model', '#dbs')
        hub.setAttribute('scale', '5 5 5')
        hub.setAttribute('class', 'cantap')
        hub.setAttribute('visible', 'true')
        hub.setAttribute('shadow', {
          receive: false,
        })
      hub.addEventListener('click', (eventz) => {
          console.log('here');
          // 0 -235 0 rotates clockwise
          // 0 30 0 also clockwise
          //160 still clockwise
          hub.setAttribute('animation__first', 'property: rotation; to: 0 115 0; dur: 2000; startEvents: loaded1')        
          hub.setAttribute('animation__second', 'property: position; to: -8 0 -8; dur: 2000; startEvents: loaded1')
          hub.setAttribute('animation__second1', 'property: scale; to: 1 1 1; dur: 2000; startEvents: loaded1')
          //hub.setAttribute('animation__third', 'property: rotation; to: 0 230 0; dur: 2000; startEvents: animationcomplete__second')        
          hub.setAttribute('animation__forth', 'property: position; to: 8 0 -8; dur: 4300; startEvents: animationcomplete__second')
          //hub.setAttribute('animation__fifth', 'property: rotation; to: 0 270 0; dur: 2000; startEvents: animationcomplete__forth')        
          hub.setAttribute('animation__sixth', 'property: position; to: 8 0 -6; dur: 2000; startEvents: animationcomplete__forth')
          //hub.setAttribute('animation__seventh', 'property: rotation; to: 0 180 0; dur: 2000; startEvents: animationcomplete__sixth')        
          /*hub.setAttribute('animation__eighth', 'property: position; to: 14 0 -11; dur: 4000; startEvents: animationcomplete__seventh')
          hub.setAttribute('animation__ninth', 'property: rotation; to: 0 230 0; dur: 2000; startEvents: animationcomplete__eighth')        
          hub.setAttribute('animation__tenth', 'property: position; to: 15 0 -13; dur: 2000; startEvents: animationcomplete__ninth')
          hub.setAttribute('animation__eleventh', 'property: position; to: 14 0 -11; dur: 2000; startEvents: animationcomplete__tenth')
          hub.setAttribute('animation__twelveth', 'property: rotation; to: 0 100 0; dur: 2000; startEvents: animationcomplete__eleventh')        
          hub.setAttribute('animation__thirteen', 'property: position; to: 13.5 0 -14; dur: 2000; startEvents: animationcomplete__twelveth')
          hub.setAttribute('animation__end', 'property: rotation; to: 0 3600 0; dur: 10000; startEvents: animationcomplete__thirteen')        
          */
          console.log('emit animation start')
          hub.emit("loaded1");
        })
        chickenanchor.appendChild(hub);
      /*const ground = document.getElementById('ground')
      this.prompt = document.getElementById('promptText')
      
      ground.addEventListener('click', (event) => {
        // Dismiss the prompt text.
        this.prompt.style.display = 'none'
        
        // Create new entity for the new object
        const newElement = document.createElement('a-entity')
  
        // The raycaster gives a location of the touch in the scene
        const touchPoint = event.detail.intersection.point
        newElement.setAttribute('position', touchPoint)
  
        const randomYRotation = Math.random() * 360
        newElement.setAttribute('rotation', `0 ${randomYRotation} 0`)
  
        const randomScale = Math.floor(Math.random() * (Math.floor(this.data.max) - Math.ceil(this.data.min)) + Math.ceil(this.data.min))
  
        newElement.setAttribute('visible', 'false')
        newElement.setAttribute('scale', '0.0001 0.0001 0.0001')
  
        newElement.setAttribute('shadow', {
          receive: false,
        })
  
        newElement.setAttribute('gltf-model', '#cactusModel')
        this.el.sceneEl.appendChild(newElement)
  
        newElement.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          newElement.setAttribute('visible', 'true')
          newElement.setAttribute('animation', {
            property: 'scale',
            to: `${randomScale} ${randomScale} ${randomScale}`,
            easing: 'easeOutElastic',
            dur: 800,
          })
        })
      })*/
    },
  }
  