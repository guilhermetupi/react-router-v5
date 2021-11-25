import React, { useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// export default class Post extends React.Component {
//   constructor(props) {
//     super(props);

//     const { search } = this.props.location;
//     this.queryParams = new URLSearchParams(search);
//   } 

//   render() {

//     return (<>
//       <button>Voltar para posts</button>
//       <h1>Post</h1>
//     </>);
//   }
// }

export default function Post() {
  const params = useParams();
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

  return (<>
    <button onClick={() => handleNavigate()}>Voltar para posts</button>
    <h1>Post</h1>
  </>);
}