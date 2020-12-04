if('serviceWorker'in navigator){
    window.addEventListener('load',()=>{
         navigator.serviceWorker.register('/serviceWorker.js')
            .then(registration =>{
                // If updatefound is fired, it means that there's
                // a new service worker being installed.
                var installingWorker = registration.installing;
                console.log('A new service worker is being installed:',
                    installingWorker);

                // You can listen for changes to the installing service worker's
                // state via installingWorker.onstatechange
            })
            .catch( error => console.log(error) )
    })
   
}else{
    alert('You need to update your brower or use Chrome');
}