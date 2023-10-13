



import { Novu } from '@novu/node';
const NovuApiKey=process.env.NOVU_API_KEY;
const novu = new Novu(`${NovuApiKey}`);


export const subscriber=  novu.subscribers.identify('125', {
  firstName: 'Sumitz',
  lastName: 'Saurabh',
});


// updatesubscriber
export const updatesubscriber=  novu.subscribers.update('15233', {
  firstName: 'ben',
  lastName: 'Saurabh',
});

export const TriggerNotif= novu.trigger('New bid in the system.', {
    to: {
      subscriberId: '123'
    },
    payload: {
      description: 'Test notification'
    }
  });
  console.log("data apaseeded from nitificatiob",TriggerNotif);
  




