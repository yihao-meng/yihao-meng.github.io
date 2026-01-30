---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
Nice to meet you! I am Yihao Meng (蒙祎昊), currently a second year Ph.D. student in HKUST, at the Department of Computer Science and Engineering of the Hong Kong University of Science and Technology (HKUST), supervised by <a href='http://huamin.org/'>Prof. Huamin Qu</a>. Before joining HKUST, I obtained my B.S. degree in Artificial Intelligence (Honor class in Qian Xuesen College) from Xi'an Jiaotong University in 2023. My research is supported by the prestigious <a href='https://cerg1.ugc.edu.hk/hkpfs/index.html'>Hong Kong PhD Fellowship Scheme</a>.

My research interests lie in video generation and world model.



# 🔥 News
- *Jan 29, 2026*: We release <a href="https://technology.robbyant.com/lingbot-world">LingBot-World</a>, a top-tier open-source world model.
- *Oct 23, 2025*: Our paper <a href="https://holo-cine.github.io/">HoloCine: Holistic Generation of Cinematic Multi-Shot Long Video Narratives</a>   has  been released. Code and demo available at <a href="https://holo-cine.github.io/">here</a>.
- *Sep 23, 2025*: Our paper Dynamic Typography has been selected as <span style="color: red;">Best Paper Finalist</span>  in ICCV 2025!
- *June 26, 2025*: Our paper Dynamic Typography has been selected as <span style="color: red;">Oral</span>  in ICCV 2025!
- *June 26, 2025*: Two papers have been accepted by ICCV 2025! See you in Hawaii!
- *Feb 27, 2025*: Our paper <a href="https://yihao-meng.github.io/AniDoc_demo/">AniDoc: Animation Creation Made Easier</a>   has  been accepted by CVPR 2025!
- *Dec 19, 2024*: Our paper <a href="https://yihao-meng.github.io/AniDoc_demo/">AniDoc: Animation Creation Made Easier</a>   has  been released. Code and demo available at <a href="https://yihao-meng.github.io/AniDoc_demo/">here</a>.
- *June 2024*: I joined Ant Group as a research intern, mentored by <a href="https://shenyujun.github.io/">Yujun Shen</a>  and <a href="https://ken-ouyang.github.io/">Hao Ouyang</a> .
- *Apr 2024*: My first co-first author paper <a href="https://arxiv.org/abs/2404.11614">Dynamic Typography: Bringing Text to Life via Video Diffusion Prior</a> has been released. Code and demo available at <a href="https://animate-your-word.github.io/demo/">here</a>.
- *Aug 2023*: I started my Ph.D. journey! 
- *Jun. 2023*: I graduated from XJTU.
- *2023.4*: I was awarded <a href='https://cerg1.ugc.edu.hk/hkpfs/index.html'>Hong Kong PhD Fellowship Scheme(HKPFS)</a> !



# 📝 Selected Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">technical report</div><img src='images/lingbot_1.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2>LingBot-World: An open frontier for world models.</h2> 

Robbyant Team.


<div class="periodical"><em>technical report</em>
</div>

  <p>
    <a href="https://arxiv.org/abs/2601.20540">paper</a> | <a href="https://technology.robbyant.com/lingbot-world">project</a> |  
    <a href="https://github.com/Robbyant/lingbot-world"><img src="https://img.shields.io/github/stars/Robbyant/lingbot-world?style=social" alt="GitHub stars" style="vertical-align:middle; margin-top:-3px;" /></a>
  </p>




</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">under review</div><img src='images/holocine.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2>HoloCine: Holistic Generation of Cinematic Multi-Shot Long Video Narratives</h2> 

**Yihao Meng**, Hao Ouyang, Yue yu, Qiuyu Wang, Wen Wang, Ka Leong Cheng, Hanlin Wang, Yixuan Li, Cheng Chen, Yanhong Zeng, Yujun Shen, Huamin Qu


<div class="periodical"><em>under review</em>
</div>

  <p>
    <a href="https://arxiv.org/abs/2510.20822">paper</a> | <a href="https://holo-cine.github.io/">project</a> |  
    <a href="https://github.com/yihao-meng/HoloCine"><img src="https://img.shields.io/github/stars/yihao-meng/HoloCine?style=social" alt="GitHub stars" style="vertical-align:middle; margin-top:-3px;" /></a>
  </p>




</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">under review</div><img src='images/world_canvas.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2>The World is Your Canvas: Painting Promptable Events with Reference Images, Trajectories, and Tex</h2> 

Hanlin Wang, Hao Ouyang, Qiuyu Wang, Yue Yu, **Yihao Meng**, Wen Wang, Ka Leong Cheng
, Shuailei Ma, Qingyan Bai, Yixuan Li, Cheng Chen, Yanhong Zeng, Xing Zhu, Yujun Shen, Qifeng Chen


<div class="periodical"><em>under review</em>
</div>

  <p>
    <a href="https://arxiv.org/abs/2512.16924">paper</a> | <a href="https://worldcanvas.github.io/">project</a> |  <a href="https://github.com/pPetrichor/WorldCanvas">code</a> 
  </p>




</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/long-animation-model.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2>LongAnimation: Long Animation Generation with Dynamic Global-Local
Memory</h2>

Nan Chen, Mengqi Huang, **Yihao Meng**, Zhendong Mao

<div class="periodical"><em>ICCV 2025</em>
</div>

  <p>
    <a href="https://arxiv.org/abs/2507.01945">paper</a> | <a href="https://cn-makers.github.io/long_animation_web/
    ">project</a> |  <a href="https://github.com/CN-makers/LongAnimation">code </a> 
    <a href="https://github.com/CN-makers/LongAnimation"><img src="https://img.shields.io/github/stars/CN-makers/LongAnimation?style=social" alt="GitHub stars" style="vertical-align:middle; margin-top:-3px;" /></a>
  </p>


  <!-- <p>
    <a href="https://arxiv.org/abs/2404.11614">paper</a> | <a href="https://animate-your-word.github.io/demo/">project</a> |  
    <a href="https://github.com/zliucz/animate-your-word"><img src="https://img.shields.io/github/stars/zliucz/animate-your-word?style=social" alt="GitHub stars" style="vertical-align:middle; margin-top:-3px;" /> </a>
  </p> -->




</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/anidoc.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2> AniDoc: Animation Creation Made Easier</h2> 

**Yihao Meng**, Hao Ouyang, Hanlin Wang, Qiuyu Wang, Wen Wang, Ka Leong Cheng, Zhiheng Liu, Yujun Shen, Huamin Qu


<div class="periodical"><em>CVPR 2025</em>
</div>

  <p>
    <a href="https://arxiv.org/abs/2412.14173">paper</a> | <a href="https://yihao-meng.github.io/AniDoc_demo/">project</a> |  
    <a href="https://github.com/ant-research/AniDoc"><img src="https://img.shields.io/github/stars/ant-research/AniDoc?style=social" alt="GitHub stars" style="vertical-align:middle; margin-top:-3px;" /></a>
  </p>




</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/dynamic_typography.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2>Dynamic Typography: Bringing Text to Life via Video Diffusion Prior</h2>

Zichen Liu\*, **Yihao Meng\* (Co-first author)**, Hao Ouyang, Yue Yu, Bolin Zhao, Daniel Cohen-Or, Huamin Qu

<div class="periodical"><em>ICCV 2025  <span style="color: red; font-weight: bold;">Best Paper Finalist</span></em>
</div>


  <p>
    <a href="https://arxiv.org/abs/2404.11614">paper</a> | <a href="https://animate-your-word.github.io/demo/">project</a> |  
    <a href="https://github.com/zliucz/animate-your-word"><img src="https://img.shields.io/github/stars/zliucz/animate-your-word?style=social" alt="GitHub stars" style="vertical-align:middle; margin-top:-3px;" /> </a>
  </p>




</div>
</div>




<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CHI 2023</div><img src='images/patat.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<h2>PaTAT: Human-AI Collaborative Qalitative Coding with Explainable Interactive Rule Synthesis</h2>

Simret Araya Gebreegziabher, Zheng Zhang, Xiaohang Tang, **Yihao Meng**, Elena L. Glassman, Toby Jia-Jun Li

<div class="periodical"><em>The ACM Conference on Human Factors in Computing Systems (CHI),2023</em>
</div>

</div>
</div> -->


# 🎖 Selected Awards
- RedBird PhD Award of HKUST
- <a href='https://cerg1.ugc.edu.hk/hkpfs/index.html'>Hong Kong PhD Fellowship Scheme(HKPFS)<a> 
- First Prize in China Robot Competition 
- **China National Schloarship(Top 1%)**

# 📖 Experience
<strong><big>Education</big></strong>
- <strong>*2023.8 - now*, The Hong Kong University of Science and Technology (HKUST)</strong>.

  Ph.D in Computer Science and Engineering    Advisor: <a href='http://huamin.org/'>Prof. Huamin Qu</a>
  
- <strong>*2019.09 - 2023.06*, Xi'an Jiaotong University (XJTU)</strong>.

  Bachelor in Artificial Intelligence (Honor class in Qian Xuesen Honors College)

<strong><big>Visiting</big></strong>
- <strong>*2022.6-2022.10*, The University of Notre Dame (ND)</strong>.

  Visiting Intern at SaNDwich Lab     Advisor:<a href='https://toby.li/'>Toby Li</a>

<strong><big>Internship</big></strong>
- <strong>*2024.6 - now*, Ant Research</strong>.
  
  Research Intern at the vision group of Interactive Intelligence Lab.  