
// "use client";
// import { Flame, Shield, Briefcase, Heart, Crown, Star, Globe, Zap, Anchor, BookOpen } from 'lucide-react';

// export const broadcastData = [
//   { 
//     id: 1, 
//     title: "How to Host God's Presence", 
//     date: "Mar 3, 2026", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=mldGqzQV7C0", 
//     desc: "Developing the spiritual intelligence required to host and maintain the tangible presence of God.", 
//     views: "12K", 
//     icon: <Flame size={14}/> 
//   },
//   { 
//     id: 2, 
//     title: "The Power of Honour", 
//     date: "Feb 26, 2026", 
//     cat: "Leadership", 
//     link: "https://www.youtube.com/watch?v=iwqh4uaX6rc", 
//     desc: "Unlocking the keys of honor that grant access to dimensions that labor cannot provide.", 
//     views: "8.5K", 
//     icon: <Crown size={14}/> 
//   },
//   { 
//     id: 3, 
//     title: "Leading Culture Change", 
//     date: "Mar 2, 2026", 
//     cat: "Marketplace", 
//     link: "https://www.youtube.com/watch?v=yznUhbmTK8I", 
//     desc: "Kingdom strategies for influencing the seven mountains of society and shifting cultural narratives.", 
//     views: "5.1K", 
//     icon: <Briefcase size={14}/> 
//   },
//   { 
//     id: 4, 
//     title: "The Classes of Judgement", 
//     date: "Jan 26, 2026", 
//     cat: "Prophetic", 
//     link: "https://www.youtube.com/watch?v=s2fcn_CHQZg", 
//     desc: "A deep dive into the different dimensions of divine justice and the courtrooms of heaven.", 
//     views: "9K", 
//     icon: <Shield size={14}/> 
//   },
//   { 
//     id: 5, 
//     title: "Restoring the Tabernacle of David", 
//     date: "Feb 28, 2026", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=PGndXXprT9E", 
//     desc: "The restoration of 24/7 worship and the priesthood of all believers in the modern church.", 
//     views: "7.2K", 
//     icon: <Star size={14}/> 
//   },
//   { 
//     id: 6, 
//     title: "The Five Ds of Satan", 
//     date: "Feb 15, 2026", 
//     cat: "Prophetic", 
//     link: "https://www.youtube.com/watch?v=AMeh--cZWXo", 
//     desc: "Exposing the strategies of the enemy: Deception, Distraction, Discouragement, Division, and Destruction.", 
//     views: "15K", 
//     icon: <Zap size={14}/> 
//   },
//   { 
//     id: 7, 
//     title: "Thy Kingdom Come", 
//     date: "Jan 5, 2026", 
//     cat: "Prophetic", 
//     link: "https://www.youtube.com/watch?v=YCt0zLSvNxM", 
//     desc: "The WOFBEC 2026 flagship message on the expansion of God's government on earth.", 
//     views: "22K", 
//     icon: <Globe size={14}/> 
//   },

//   // --- 2025: GLOBAL MANDATE & FOUNDATIONS ---
//   { 
//     id: 8, 
//     title: "The Gospel of the Kingdom & Africa", 
//     date: "Oct 12, 2025", 
//     cat: "Marketplace", 
//     link: "https://www.youtube.com/watch?v=SRR0HwGLPWg", 
//     desc: "How the original gospel of the kingdom is the only solution for Africa's socio-economic restoration.", 
//     views: "11K", 
//     icon: <Briefcase size={14}/> 
//   },
//   { 
//     id: 9, 
//     title: "Tarry Till You Are Clothed", 
//     date: "Aug 20, 2025", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=iGUvH1kI9V8", 
//     desc: "The necessity of the upper room experience for every believer called to impact their generation.", 
//     views: "6.8K", 
//     icon: <Flame size={14}/> 
//   },
//   { 
//     id: 10, 
//     title: "Dealing with Foundations", 
//     date: "Jun 14, 2025", 
//     cat: "Prophetic", 
//     link: "https://www.youtube.com/watch?v=vbhjXga5sOc", 
//     desc: "Addressing ancestral patterns and legal grounds that hinder progress in the life of a believer.", 
//     views: "19K", 
//     icon: <Anchor size={14}/> 
//   },
//   { 
//     id: 11, 
//     title: "The 7 Tests of True Love", 
//     date: "Feb 14, 2025", 
//     cat: "Family", 
//     link: "https://www.youtube.com/watch?v=u6ilMTYbcc4", 
//     desc: "A character-based approach to finding and keeping the right partner in marriage.", 
//     views: "13K", 
//     icon: <Heart size={14}/> 
//   },

//   // --- 2024: PROPHETIC ACCELERATION ---
//   { 
//     id: 12, 
//     title: "The Year of the Church", 
//     date: "Dec 31, 2023", 
//     cat: "Prophetic", 
//     link: "https://www.youtube.com/watch?v=_HkzHcOpvmY", 
//     desc: "The 2024 prophetic roadmap for Dominion City Global and the body of Christ at large.", 
//     views: "30K", 
//     icon: <Star size={14}/> 
//   },
//   { 
//     id: 13, 
//     title: "Financial Dominion", 
//     date: "Sep 22, 2024", 
//     cat: "Marketplace", 
//     link: "https://www.youtube.com/watch?v=GCaJQGb8Bc4", 
//     desc: "How to build recession-proof wealth through kingdom economic principles.", 
//     views: "10K", 
//     icon: <Briefcase size={14}/> 
//   },
//   { 
//     id: 14, 
//     title: "The Mystery of Capital", 
//     date: "Jul 10, 2024", 
//     cat: "Marketplace", 
//     link: "https://www.youtube.com/watch?v=VfwugmSu4sg", 
//     desc: "Understanding that capital is not just money, but ideas, relationships, and spiritual favor.", 
//     views: "8.9K", 
//     icon: <Zap size={14}/> 
//   },

//   // --- 2023: SUPERNATURAL REALITIES ---
//   { 
//     id: 15, 
//     title: "Ministry of Angels Vol 1", 
//     date: "May 12, 2023", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=Aoef23lRRaM", 
//     desc: "Unveiling the operation of the angelic host in the life of a covenant child.", 
//     views: "75K", 
//     icon: <Shield size={14}/> 
//   },
//   { 
//     id: 16, 
//     title: "Ministry of Angels Vol 2", 
//     date: "May 19, 2023", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=4m-U8YhVt4s", 
//     desc: "How to activate angelic assistance through prayer and spoken words.", 
//     views: "45K", 
//     icon: <Shield size={14}/> 
//   },
//   { 
//     id: 17, 
//     title: "Ministry of Angels Vol 3", 
//     date: "May 26, 2023", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=SDZTNieCTPM", 
//     desc: "The role of angels in protection, provision, and territorial warfare.", 
//     views: "38K", 
//     icon: <Shield size={14}/> 
//   },
//   { 
//     id: 18, 
//     title: "Covenant Wealth", 
//     date: "Mar 11, 2023", 
//     cat: "Marketplace", 
//     link: "https://www.youtube.com/watch?v=IazjE_MAxVs", 
//     desc: "The difference between worldly riches and the wealth that comes with no sorrow.", 
//     views: "21K", 
//     icon: <Crown size={14}/> 
//   },

//   // --- 2022: LEADERSHIP & MENTORSHIP ---
//   { 
//     id: 19, 
//     title: "Apostolic Succession", 
//     date: "Nov 05, 2022", 
//     cat: "Leadership", 
//     link: "https://www.youtube.com/watch?v=MzQKYjT9txg", 
//     desc: "The science of mentorship and passing the baton to the next generation of leaders.", 
//     views: "5.4K", 
//     icon: <Crown size={14}/> 
//   },



//   // --- 2021: THE SCIENCE OF PRAYER ---
//   { 
//     id: 22, 
//     title: "The Science of Prayer", 
//     date: "Jan 15, 2021", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=MYQrRMD1rJQ", 
//     desc: "Understanding prayer not as a religious ritual but as a spiritual technology for change.", 
//     views: "50K", 
//     icon: <Flame size={14}/> 
//   },
 


//   { 
//     id: 26, 
//     title: "The Church in the House", 
//     date: "May 03, 2020", 
//     cat: "Spiritual", 
//     link: "https://www.youtube.com/watch?v=Q8v0L_C4M7I", 
//     desc: "Returning to the New Testament model of decentralized spiritual power.", 
//     views: "40K", 
//     icon: <Heart size={14}/> 
//   },

//   { id: 27, title: "The Mystery of Altars", date: "Jan 2024", cat: "Prophetic", link: "https://www.youtube.com/watch?v=R95HkU8H-64", desc: "Understanding the battle of altars in territorial taking.", views: "12K", icon: <Zap size={14}/> },
//   { id: 28, title: "The 4 Faces of Leadership", date: "Mar 2023", cat: "Leadership", link: "https://www.youtube.com/watch?v=S2u7VpX-MhE", desc: "Modeling the lion, ox, man, and eagle in governance.", views: "8K", icon: <Crown size={14}/> },
//   { id: 29, title: "Kingdom Marriage", date: "Jun 2022", cat: "Family", link: "https://www.youtube.com/watch?v=3S_o0B2mG_Q", desc: "Building a marriage that serves as a prophetic sign.", views: "15K", icon: <Heart size={14}/> },
//   { id: 30, title: "The Spirit of Excellence", date: "Oct 2021", cat: "Marketplace", link: "https://www.youtube.com/watch?v=B0f9e1K6C2Q", desc: "Why Daniel was preferred: the technology of excellence.", views: "11K", icon: <Star size={14}/> },
//   { id: 31, title: "Breaking Generational Curses", date: "Sep 2025", cat: "Prophetic", link: "https://www.youtube.com/watch?v=f-ZfVf7I6I0", desc: "Legal steps to total ancestral freedom.", views: "25K", icon: <Shield size={14}/> },
//   { id: 32, title: "The Power of a Vision", date: "Jan 2026", cat: "Leadership", link: "https://www.youtube.com/watch?v=oE7k5G9_A6I", desc: "How to see what God is doing and align your life.", views: "9K", icon: <BookOpen size={14}/> },
//   { id: 33, title: "The Joseph Company", date: "Nov 2024", cat: "Marketplace", link: "https://www.youtube.com/watch?v=vVj_N3v5H8w", desc: "Raising economic deliverers for a time of famine.", views: "7K", icon: <Briefcase size={14}/> },
//   { id: 34, title: "Voice of the Spirit", date: "Jul 2023", cat: "Spiritual", link: "https://www.youtube.com/watch?v=mYvL5P5z2-8", desc: "How to distinguish God's voice from self and the enemy.", views: "18K", icon: <Flame size={14}/> },
//   { id: 35, title: "The Finished Work", date: "Apr 2022", cat: "Spiritual", link: "https://www.youtube.com/watch?v=Xv9V_C4rU_s", desc: "Walking in the full reality of the atonement.", views: "20K", icon: <Anchor size={14}/> },
//   { id: 36, title: "Dominion Mandate", date: "Dec 2021", cat: "Prophetic", link: "https://www.youtube.com/watch?v=kYI8L2u_C4I", desc: "Our global mission to take the gospel to the ends of the earth.", views: "14K", icon: <Globe size={14}/> },
//   { id: 37, title: "Character: The Bedrock", date: "Aug 2020", cat: "Leadership", link: "https://www.youtube.com/watch?v=zP0T6P_5D8w", desc: "Why charisma can take you there but only character keeps you.", views: "10K", icon: <Shield size={14}/> },
//   { id: 38, title: "The Anointing of Ease", date: "Feb 2026", cat: "Spiritual", link: "https://www.youtube.com/watch?v=pY5U_H7jV6Q", desc: "Breaking the spirit of toil and hard labor.", views: "33K", icon: <Zap size={14}/> },
//   { id: 39, title: "7 Pillars of Wisdom", date: "May 2025", cat: "Leadership", link: "https://www.youtube.com/watch?v=V9u6B3M_L8E", desc: "Building your life and ministry on solid ground.", views: "6K", icon: <BookOpen size={14}/> },
//   { id: 40, title: "The Wealth of Nations", date: "Oct 2024", cat: "Marketplace", link: "https://www.youtube.com/watch?v=G8v9L3v6E_w", desc: "Kingdom strategies for national economic shift.", views: "11K", icon: <Briefcase size={14}/> },
//   { id: 41, title: "Raising Godly Seed", date: "Jun 2023", cat: "Family", link: "https://www.youtube.com/watch?v=Q8v0L_C4M7I", desc: "Parenting strategies for the digital age.", views: "9K", icon: <Heart size={14}/> },
//   { id: 42, title: "The Mind of Christ", date: "Mar 2022", cat: "Spiritual", link: "https://www.youtube.com/watch?v=S0v9P_H6L9E", desc: "The renewal of the mind as the key to transformation.", views: "13K", icon: <BookOpen size={14}/> },
//   { id: 43, title: "Strategic Warfare", date: "Sep 2021", cat: "Prophetic", link: "https://www.youtube.com/watch?v=vVj_G9u6B8E", desc: "Advanced spiritual warfare for territorial taking.", views: "21K", icon: <Shield size={14}/> },
//   { id: 44, title: "The Call to Ministry", date: "Jan 2020", cat: "Leadership", link: "https://www.youtube.com/watch?v=X8v0B2m6E_I", desc: "Identifying and answering the divine call on your life.", views: "5K", icon: <Crown size={14}/> },
//   { id: 45, title: "Spiritual Gifts", date: "Nov 2025", cat: "Spiritual", link: "https://www.youtube.com/watch?v=G9v6L3M_H8I", desc: "Discovering and deploying your spiritual DNA.", views: "16K", icon: <Zap size={14}/> },
//   { id: 46, title: "The Covenant of Salt", date: "Jul 2024", cat: "Prophetic", link: "https://www.youtube.com/watch?v=B9v0L6M_S2E", desc: "Understanding the incorruptible covenant with God.", views: "8K", icon: <Anchor size={14}/> },
//   { id: 47, title: "Integrity in Business", date: "Apr 2023", cat: "Marketplace", link: "https://www.youtube.com/watch?v=zVj_G9u0L2w", desc: "Building a brand that God can endorse.", views: "7K", icon: <Briefcase size={14}/> },
//   { id: 48, title: "The Healing Stream", date: "Feb 2022", cat: "Spiritual", link: "https://www.youtube.com/watch?v=V9v0B6M_L8I", desc: "Accessing the therapeutic power of the Holy Spirit.", views: "29K", icon: <Flame size={14}/> },
//   { id: 49, title: "Faith for the Impossible", date: "Dec 2021", cat: "Spiritual", link: "https://www.youtube.com/watch?v=vVj_N6u0B8E", desc: "Moving mountains through the word of faith.", views: "18K", icon: <Star size={14}/> },
//   { id: 50, title: "Kingdom Diplomacy", date: "Aug 2020", cat: "Leadership", link: "https://www.youtube.com/watch?v=G9v0L3M_H6I", desc: "The believer as an ambassador of heaven.", views: "4K", icon: <Globe size={14}/> },
//   { id: 51, title: "Wisdom for Kings", date: "Jan 2026", cat: "Leadership", link: "https://www.youtube.com/watch?v=S8v0L9M_G2E", desc: "Proverbs for the modern marketplace leader.", views: "12K", icon: <Crown size={14}/> },
//   { id: 52, title: "The Midnight Cry", date: "Oct 2025", cat: "Prophetic", link: "https://www.youtube.com/watch?v=V9v0L6M_S2E", desc: "The prophetic awakening of the Church.", views: "15K", icon: <Flame size={14}/> },
// ];


"use client";
import { Flame, Shield, Briefcase, Heart, Crown, Star, Globe, Zap, Anchor, BookOpen } from 'lucide-react';


export const broadcastData = [

  { 
    id: 1, 
    title: "How to Host God's Presence", 
    date: "Mar 3, 2026", 
    cat: "Spiritual", 
    link: "https://www.youtube.com/watch?v=mldGqzQV7C0", 
    desc: "Developing the spiritual intelligence required to host and maintain the tangible presence of God.", 
    views: "12K", 
    icon: <Flame size={14}/> 
  },
  { 
    id: 2, 
    title: "The Power of Honour", 
    date: "Feb 26, 2026", 
    cat: "Leadership", 
    link: "https://www.youtube.com/watch?v=iwqh4uaX6rc", 
    desc: "Unlocking the keys of honor that grant access to dimensions that labor cannot provide.", 
    views: "8.5K", 
    icon: <Crown size={14}/> 
  },
  { 
    id: 3, 
    title: "Leading Culture Change", 
    date: "Mar 2, 2026", 
    cat: "Marketplace", 
    link: "https://www.youtube.com/watch?v=yznUhbmTK8I", 
    desc: "Kingdom strategies for influencing the seven mountains of society and shifting cultural narratives.", 
    views: "5.1K", 
    icon: <Briefcase size={14}/> 
  },
  { 
    id: 4, 
    title: "The Classes of Judgement", 
    date: "Jan 26, 2026", 
    cat: "Prophetic", 
    link: "https://www.youtube.com/watch?v=s2fcn_CHQZg", 
    desc: "A deep dive into the different dimensions of divine justice and the courtrooms of heaven.", 
    views: "9K", 
    icon: <Shield size={14}/> 
  },
  { 
    id: 5, 
    title: "Restoring the Tabernacle of David", 
    date: "Feb 28, 2026", 
    cat: "Spiritual", 
    link: "https://www.youtube.com/watch?v=PGndXXprT9E", 
    desc: "The restoration of 24/7 worship and the priesthood of all believers in the modern church.", 
    views: "7.2K", 
    icon: <Star size={14}/> 
  },

  { 
    id: 7, 
    title: "Thy Kingdom Come", 
    date: "Jan 5, 2026", 
    cat: "Prophetic", 
    link: "https://www.youtube.com/watch?v=YCt0zLSvNxM", 
    desc: "The WOFBEC 2026 flagship message on the expansion of God's government on earth.", 
    views: "22K", 
    icon: <Globe size={14}/> 
  },

  // --- 2025: GLOBAL MANDATE & FOUNDATIONS ---
  { 
    id: 8, 
    title: "The Gospel of the Kingdom & Africa", 
    date: "Oct 12, 2025", 
    cat: "Marketplace", 
    link: "https://www.youtube.com/watch?v=SRR0HwGLPWg", 
    desc: "How the original gospel of the kingdom is the only solution for Africa's socio-economic restoration.", 
    views: "11K", 
    icon: <Briefcase size={14}/> 
  },
  

 

  // --- 2024: PROPHETIC ACCELERATION ---
  { 
    id: 12, 
    title: "The Year of the Church", 
    date: "Dec 31, 2023", 
    cat: "Prophetic", 
    link: "https://www.youtube.com/watch?v=_HkzHcOpvmY", 
    desc: "The 2024 prophetic roadmap for Dominion City Global and the body of Christ at large.", 
    views: "30K", 
    icon: <Star size={14}/> 
  },



  // --- 2023: SUPERNATURAL REALITIES ---
  { 
    id: 15, 
    title: "Ministry of Angels Vol 1", 
    date: "May 12, 2023", 
    cat: "Spiritual", 
    link: "https://www.youtube.com/watch?v=Aoef23lRRaM", 
    desc: "Unveiling the operation of the angelic host in the life of a covenant child.", 
    views: "75K", 
    icon: <Shield size={14}/> 
  },
 
];