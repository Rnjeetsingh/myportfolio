import React from 'react'
import "../styles/githubs.css"

export default function Githubs() {
  return (
    <div className="gitMain">
        <h1>My Github</h1>
        <div className="gitimgBx">
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Rnjeetsingh&theme=radical" alt="" />
        </div>
        <div className="gitimgBx">
            <img src="https://github-readme-activity-graph.cyclic.app/graph?username=Rnjeetsingh&theme=react-dark&hide_border=true" alt="" />
        </div>
        <div className="gitimgBx">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rnjeetsingh&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true" alt="" />
            <img src="https://github-readme-stats.vercel.app/api?username=Rnjeetsingh&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true" alt="" />
        </div>
    </div>
  )
}
