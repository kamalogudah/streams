import React from 'react';

const StreamEdit = (props) => {
  console.log(props);
  return <div> StreamEdit </div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }

}
export default connect(mapStateToProps)(StreamEdit);
