/** @jsx jsx */
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import { jsx, Box, Text, Flex } from 'theme-ui';
import list from './sidebar.data';

export default function Sidebar() {
    const router = useRouter();
    const [subFlag, setsubFlag] = useState(true);
    const handleMainMenu = (e, subListLength, link) => {
        e.preventDefault();
        if(subListLength > 0) {            
            if(subFlag){
                setsubFlag(false);
            } else {
                setsubFlag(true);
            } 
        } else {    
            router.push(link);            
        }
    }
    return(
        <Box>
            <ul sx={{padding: '0px 0px'}}>
                {list.map((item, i) => (                    
                    <li key={i} onClick={(e)=> handleMainMenu(e, item.sublist.length, item.router)} sx={styles.mainlist.type}>
                        <Flex id={'sidebar_' + item.id} sx={ item.sublist.length == 0 ? styles.mainlist.aloneMenu : styles.mainlist.multiMenu}>
                            <Text sx={styles.mainlist.icon}>{item.icon}</Text>
                            <Text sx={styles.mainlist.menuStyle}> {item.text} </Text>
                            {item.sublist.length > 0 ? <Text sx={styles.mainlist.icon}>{subFlag ? item.subIconUp : item.subIconDown}</Text> : "" }
                        </Flex>
                        <ul sx={subFlag ? styles.mainlist.subListActive : styles.mainlist.subListNonActive}>
                            {item.sublist.map((item, i) => (
                                <li id={'sidebar_' + item.text.toLowerCase()} key={i} onClick={()=> {router.push(item.router)}} sx={styles.mainlist.sublistType}>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>  
        </Box>              
    )
}

const styles = {
    mainlist: {
        type: {
            listStyleType: 'none',
            fontFamily: 'mazzard-h-bold',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '15px',
            lineHeight: '40px',
            borderRadius: '8px',
            cursor: 'pointer',
        },        
        sublistType: {
            paddingLeft: '10px',            
            listStyleType: 'none',
            borderRadius: '8px',            
            "&:hover": {
                backgroundColor: '#5B6EF5',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'DM Sans',
                fontWeight: '400'
            }
        },
        aloneMenu: {
            'pl': '8px',
            borderRadius: '8px',
            "&:hover": {
                backgroundColor: '#5B6EF5',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'DM Sans',
                fontWeight: '400'
            }
        },
        multiMenu: {
            'pl': '8px',
        },
        menuStyle : {
            width: '100%',
            pl: '10px',
        },
        icon: {
            pt: '2px',
        },
        subListActive : {
            visibility: 'visible',
            pl: '22px',
        },
        subListNonActive: {
            visibility: 'hidden',
            pl: '22px',
        }
    },
}
    

//save for animation sidebar in the future.

// export default function Sidebar() {
//     const router = useRouter();
//     const [subFlag, setsubFlag] = useState(true);
//     const handleMainMenu = (e, subListLength, link, className) => {
//         e.preventDefault();
//         if(subListLength > 0) {            
//             if(document.getElementsByClassName(className)[0].style.visibility == 'hidden'){
//                 document.getElementsByClassName(className)[0].style.visibility = 'visible';
//                 setsubFlag(true);
//             } else {
//                 document.getElementsByClassName(className)[0].style.visibility = 'hidden';
//                 setsubFlag(false);
//             } 
//         } else {    
//             router.push(link);            
//         }
//     }
//     return(
//         <>
//             <ul>
//                 {list.map((item) => (                    
//                     <li onClick={(e)=> handleMainMenu(e, item.sublist.length, item.router, item.className)} sx={styles.mainlist.type}>
//                         <Flex>
//                             <Text sx={styles.mainlist.icon}>{item.icon}</Text>
//                             <Text sx={item.sublist.length > 0 ? styles.mainlist.multiList : styles.mainlist.aloneList}> {item.text} </Text>
//                             {item.sublist.length > 0 ? <Text sx={styles.mainlist.icon}>{subFlag ? item.subIconUp : item.subIconDown}</Text> : "" }
//                         </Flex>
//                         <ul className={item.className} sx={{paddingLeft: '22px'}}>
//                             {item.sublist.map((item) => (
//                                 <li onClick={()=> {router.push(item.router)}} sx={styles.mainlist.sublistType}>
//                                     {item.text}
//                                 </li>
//                             ))}
//                         </ul>
//                     </li>
//                 ))}
//             </ul>
//         </>        
//     )
// }