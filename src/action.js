/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 05.05.2020
 * Time: 9:04
 * About: zoom download link
 *
 */
'use strict'



const action = function () {
try{


    console.log('Freedom of Information!')

    const downloadIcon = chrome.runtime.getURL('assets/icons/download.svg')

    const videoBlockArr = document.getElementsByTagName('video')


        if(!videoBlockArr[0]){
            throw new Error(`can't find the video block`)
        }

    const videoLink = videoBlockArr[0].src

    if(!videoLink){
        throw new Error(`can't find the video link`)
    }

    const divDownloadLink =  document.createElement('div')

    divDownloadLink.className = 'downloadLink';

    divDownloadLink.innerHTML = `
                                <div class="tooltip">
                                <a href="${videoLink}" id="downloadLinkButton"><img src="${downloadIcon}" alt="download link" width="30" /></a>
                                  <span class="tooltiptext">Right click and Save link as</span>
                                </div>
                                `


    document.getElementsByClassName('player-view-wrapper')[0].prepend(divDownloadLink)






}catch (e) {
    console.error(e)
}
}
document.addEventListener('readystatechange', () => document.readyState === 'complete' && action());



