import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video }) => {
  return <li>Video</li>;
};

VideoListItem.propTypes = {
  video: PropTypes.shape({
    etag: PropTypes.string,
    id: PropTypes.object,
    kind: PropTypes.string,
    snippet: PropTypes.object,
  }).isRequired,
};

export default VideoListItem;
