import React from 'react';
import PropTypes from 'prop-types';

import Image from '@components/abstracts/Image';
import ButtonBase from '@components/abstracts/ButtonBase';
import TypographyBase from '@components/abstracts/TypographyBase';

import downloadIcon from '../../svg/download.svg';

const DownloadButton = ({ onClick, innerText, addedClassNames = '' }) => {
  return (
    <ButtonBase className={`button-basic w-full ${addedClassNames}`} onClick={onClick}>
      <Image src={downloadIcon} alt="download-icon" className="mr-1 h-4" />
      <TypographyBase>{innerText}</TypographyBase>
    </ButtonBase>
  );
};

DownloadButton.propTypes = {
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  addedClassNames: PropTypes.string,
};

export default DownloadButton;
