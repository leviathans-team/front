import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: 400,
  backgroundColor: '#3f51b5',
}));

const StyledTypography = styled(Typography)({
  color: '#fff',
});

interface InformationBlockProps {
  imageUrl: string;
  placeName: string;
  publishDate: string;
  description: string;
  onClick: () => void;
}

const InformationBlock: React.FC<InformationBlockProps> = ({ imageUrl, placeName, publishDate, description, onClick }) => {
  return (
    <StyledCard>
      <CardActionArea onClick={onClick}>
        <InfoContainer>
          <ImageContainer>
            <CardMedia component="img" image={imageUrl} alt={placeName} />
            <StyledTypography variant="h5">{placeName}</StyledTypography>
            <StyledTypography variant="body2">{publishDate}</StyledTypography>
          </ImageContainer>
          <TextContainer>
            <CardContent>
              <StyledTypography variant="body1">{description}</StyledTypography>
            </CardContent>
          </TextContainer>
        </InfoContainer>
      </CardActionArea>
    </StyledCard>
  );
};

export default InformationBlock;
