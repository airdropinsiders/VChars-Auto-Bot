import _0x5b171e from 'figlet';
import { colors } from '../../../config/colors.js';

export function displayBanner() {
  const asciiArt = `
        █████╗ ██╗██████╗ ██████╗ ██████╗  ██████╗ ██████╗ 
       ██╔══██╗██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
       ███████║██║██████╔╝██║  ██║██████╔╝██║   ██║██████╔╝
       ██╔══██║██║██╔══██╗██║  ██║██╔══██╗██║   ██║██╔═══╝ 
       ██║  ██║██║██║  ██║██████╔╝██║  ██║╚██████╔╝██║     
       ╚═╝  ╚═╝╚═╝╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     
                                                           
       ██╗███╗   ██╗███████╗██╗██████╗ ███████╗██████╗     
       ██║████╗  ██║██╔════╝██║██╔══██╗██╔════╝██╔══██╗    
       ██║██╔██╗ ██║███████╗██║██║  ██║█████╗  ██████╔╝    
       ██║██║╚██╗██║╚════██║██║██║  ██║██╔══╝  ██╔══██╗    
       ██║██║ ╚████║███████║██║██████╔╝███████╗██║  ██║    
       ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝    
  `;

  console.log(colors.bannerText + asciiArt + colors.reset);
  console.log(colors.bannerLinks + "Join Our Channel : t.me/airdropinsiderID" + colors.reset);
  console.log(colors.bannerBorder + '' + colors.reset);
}