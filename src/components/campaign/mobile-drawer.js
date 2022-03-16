/** @jsx jsx */
import router, { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu, IoMdList } from 'react-icons/io';
import { jsx, Box, Text, Flex } from 'theme-ui';
import list from './sidebar.data';

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);
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
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdList size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            <ul>
              {list.map((item) => (                    
                <li onClick={(e)=> handleMainMenu(e, item.sublist.length, item.router)} sx={styles.mainlist.type}>
                  <Flex>
                    <Text sx={styles.mainlist.icon}>{item.icon}</Text>
                    <Text sx={item.sublist.length > 0 ? styles.mainlist.multiList : styles.mainlist.aloneList}> {item.text} </Text>                    
                  </Flex>
                  <ul sx={subFlag ? styles.mainlist.subListActive : styles.mainlist.subListNonActive}>
                    {item.sublist.map((item) => (
                      <li onClick={()=> {router.push(item.router)}} sx={styles.mainlist.sublistType}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
       
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
  
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '70px',
    pb: '40px',
    px: '15px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },
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
      color: 'black',
    },        
    sublistType: {
      paddingLeft: '10px',            
      listStyleType: 'none',            
      "&:hover": {
          backgroundColor: '#5B6EF5',
          borderRadius: '8px',
      }
    },
    aloneList: {
      width: '100%',
      pl: '10px',
      "&:hover": {
          backgroundColor: '#5B6EF5',
          borderRadius: '8px',
      }
    },
    multiList : {
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

export default MobileDrawer;
