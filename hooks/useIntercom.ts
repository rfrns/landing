'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
  }
}

export const useIntercom = () => {
  useEffect(() => {
    // TODO: Linting bug here!
    return;

    // Intercom'un yüklenmesi
    // (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/pog7ao3c';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    // Intercom'u başlat
    window.Intercom('boot', {
      api_base: "https://api-iam.intercom.io",
      app_id: "pog7ao3c"
    });

    // Cleanup
    return () => {
      window.Intercom('shutdown');
    };
  }, []);
}; 