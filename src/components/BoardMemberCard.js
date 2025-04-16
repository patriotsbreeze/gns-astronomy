import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BoardMemberCardContainer = styled(motion.div)`
  background: rgba(10, 10, 42, 0.5);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.box};
  border: 1px solid rgba(123, 104, 238, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(123, 104, 238, 0.4);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(3, 0, 20, 0.9), transparent);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const MemberRole = styled.h4`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const MemberBio = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const BoardMemberCard = ({ name, role, bio, image }) => {
  return (
    <BoardMemberCardContainer
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MemberImage src={image} />
      <MemberInfo>
        <MemberName>{name}</MemberName>
        <MemberRole>{role}</MemberRole>
        <MemberBio>{bio}</MemberBio>
      </MemberInfo>
    </BoardMemberCardContainer>
  );
};

export default BoardMemberCard;
