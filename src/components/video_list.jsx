import React from 'react'
import VideoListItem from './video_list_item';
import PropTypes from 'prop-types';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;
