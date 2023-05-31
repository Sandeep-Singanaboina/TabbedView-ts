import React, { useState,useEffect, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  // width:'800px'
});

const TabPanelContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  overflow: 'auto',
  border: '1px solid #ccc',
  height: 'calc(100vh - 200px)', // Adjust the height as needed
  flex:1,
}));

const TabsContainer = styled('div')({
  width: '800px', // Set the desired width

});

const PaginationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const PageButton = styled('span')(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const DynamicTabbedView: React.FC = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1 value Content for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valuevContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 valueContent for Tab 1 value'},
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
    { label: 'Tab 4', content: 'Content for Tab 4' },
    { label: 'Tab 5', content: 'Content for Tab 5' },
    { label: 'Tab 6', content: 'Content for Tab 6' },
    { label: 'Tab 7', content: 'Content for Tab 7' },
    { label: 'Tab 8', content: 'Content for Tab 8' },
    { label: 'Tab 9', content: 'Content for Tab 9' },
    { label: 'Tab 10', content: 'Content for Tab 10' },
  ];
  const pageSize = 5;
  const numPages = Math.ceil(tabs.length / pageSize);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (tabsRef.current && value === (page + 1) * pageSize - 1) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [value, page]);

  return (
    <Container>
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="Dynamic Tabbed View" centered>
        {tabs.slice(page * pageSize, (page + 1) * pageSize).map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <div ref={tabsRef}>
      {tabs.slice(page * pageSize, (page + 1) * pageSize).map((tab, index) => (
        <TabPanelContainer key={index} role="tabpanel" hidden={value !== index}>
          {value === index && (
            <Typography component="div" sx={{ p: 2 }}>
              {tab.content}
            </Typography>
          )}
        </TabPanelContainer>
      ))}
      </div>
      <PaginationContainer>
        {[...Array(numPages)].map((_, pageIndex) => (
          <PageButton
            key={pageIndex}
            className={pageIndex === page ? 'active' : ''}
            onClick={() => handlePageChange(pageIndex)}
          >
            {pageIndex + 1}
          </PageButton>
        ))}
      </PaginationContainer>
    </div>
  </Container>
  );
};

export default DynamicTabbedView;
