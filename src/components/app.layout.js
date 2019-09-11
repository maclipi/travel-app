/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';


import { Card, Icon, PageHeader, Tooltip,Modal, List } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

const AppLayout = () => {
  const [count, setCount] = useState(false);
  const [getContent, setContent] = useState([]);
  const [title, setTitle] = useState('');
  const [request, setRequest] = useState('');
  const [size,setSize] =useState(4);

  let req = false;
  const openModal = (e, title) => {
    console.log(e);
    setRequest(e);
    setTitle(title);
    setCount(true);
    
    window.history.pushState('','',`/${title}`)

    // dangerouslySetInnerHTML
  }
  const handleClose = () => {
console.log('getClose')
    setCount(false);
    window.history.pushState('','',`/`)
  }
  const getData = async () => {
    await axios.get(`http://3.17.26.22:3002/getPost`)
      .then(res => {
        const posts = res.data;

        setContent(posts);
        return posts;
      })
    return 'posts';
  }



  useEffect(() => {
    getData(e => {
      console.log(e);
    });
    console.log(window.innerHeight,window.innerWidth);
    if (window.innerWidth < 600) setSize(1);

  }, [])

  return (
<>
<PageHeader  title=":-)  Blog" subTitle="Read in Simplicity 😜" />,
<ReactTooltip />
    <List
      grid={{ gutter: 16, column: size }}
      className="setAlignment"
      dataSource={getContent}
      renderItem={item => (
        <List.Item>
          <Card
            style={{ width: 300 }}
            className={size === 1 ? 'setAlignment':''}
            cover={
              <img
                alt={item.title}
                src={item.image}
                width={300} height={200}
              />
            }
            actions={[
              <Icon type="like" theme="filled" title="1" key="heart" ></Icon>,
              <Icon type="dislike"  key="edit" />,
              <p type="ellipsis"  data-tip={item.glimpse} key="ellipsis" onClick={()=> openModal(item.content,item.title)} >{item.title}</p>,
            ]}
          >
          <Tooltip placement="top" title={ item.title}>
            <Meta
              title={item.title}
              description={item.glimpse}
              className={title? "title-text" :'content-text'}
            />
            </Tooltip>
          </Card>
        </List.Item>
      )}
    />
    <div>
        <Modal
          title="Basic Modal"
          visible={count}
          onCancel={handleClose}
          onOk={handleClose}
        >
          <div dangerouslySetInnerHTML={{ __html: request}}></div>
        </Modal>
      </div>
    </>




  )
}

function chunkArray(myArray, chunk_size) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

export default AppLayout;