import React from 'react'

const LoadingScreen = () => {
    // return [...Array(item).keys()].map(() => (
    //     <div className="animate-pulse">
    //       <div className="bg-gray-300 rounded-lg h-72"></div>
    //     </div>
    //   ))
    return(
      <div className=''>
        <div className='w-{400}'>
          <img src="https://s3-alpha-sig.figma.com/img/9143/80fc/828b6905226338bf014d48ad82fa58c4?Expires=1678665600&Signature=X2mLLsRrMFwmVumw-llOz~t9YBKnakSxCEKisMiTTNH~YPuZy8SDMJryUA7JfBaqjjHQ099t94463o~jxBYEmmM0JPVjsNsyH9GGHyiWAqujL1524mTUT5Sna0rR2hKtrGf-jM41aM~Q3J4pEJf3ADTkd5JXwvZT5tWzCA8Uwwca8zo2HcS3pOj94OKn2GwWF4-D9wqG8arDUkh~sNt6baItMJA2iwbT63Ijb5Cbb2BnW3Rsr7bsf1WTFMb4CfhnULD-S7hMkGL4OBR86l3oj8aEicTRSE1U9vziU5BtmJDmM16sg4cssmL9~ajjPY03kltIcqna7h9paPcEScuOVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Loading" />
          Loading Some Awesome Images....
        </div>
      </div>
    )
}

export default LoadingScreen;