import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AcUnitSharp, AppsOutlined, AssignmentOutlined, BarChartOutlined, MonetizationOnOutlined, PieChartOutlined, PollOutlined, ShareOutlined, TimelineSharp } from '@material-ui/icons';
import React from 'react'

const SideDrawerList = ({ iconColor }) => {

  const textsIcons = [
    {
      text: "Home",
      icon: <AppsOutlined />,
    },
    {
      text: "Section 1",
      icon: <PollOutlined />,
    },
    {
      text: "Section 2",
      icon: <MonetizationOnOutlined />,
    },
    {
      text: "Section 3",
      icon: <AcUnitSharp />,
    },
    {
      text: "Section 4",
      icon: <TimelineSharp />,
    },
    {
      text: "Section 5",
      icon: <PieChartOutlined />,
    },
    {
      text: "Section 6",
      icon: <BarChartOutlined />,
    },
    {
      text: "Section 7",
      icon: <ShareOutlined />,
    },
    {
      text: "Documentation",
      icon: <AssignmentOutlined />,
    },
  ]


  return (
    <div>
      <List>
        {textsIcons.map((elm) => (
          <ListItem button key={elm.text} >
              <ListItemIcon className={iconColor}>{elm.icon}</ListItemIcon>
              <ListItemText primary={<b>{elm.text}</b>}  />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SideDrawerList;