export interface ResearchEntry {
  slug: string
  title: string
  date: string
  abstract: string
  pdfUrl?: string
  /** Shown when the PDF button is clicked and no pdfUrl is set yet. */
  pdfNote?: string
}

const stillWriting = 'The author is still making changes and updates to this paper.'
const underReview = 'This paper is currently submitted and under consideration for a conference.'

// Ordered most recent first. Fill in real dates and a pdfUrl once each
// paper is ready to link.
export const entries: ResearchEntry[] = [
  {
    slug: 'transfer-learning-room-classification-ar',
    title: 'A Transfer Learning Approach for Room Type Classification in Augmented Reality',
    date: '2027',
    abstract:
      'We present ongoing work on a markerless room recognition system for augmented reality campus tours. A head-mounted device identifies which room a user is in using only its passthrough camera, with no markers or fixtures placed in the environment. We build and publicly release our own room-level image dataset, captured on-site and hosted on the Hugging Face Hub, so the classifier learns from the actual target rooms rather than generic images. We use transfer learning on MobileNetV2, chosen for its efficiency on-device, to adapt a pretrained model to distinguish the school’s rooms. The resulting classifier acts as the perception component of a self-guided AR tour: it recognizes the room and triggers a panel with relevant information, removing the need for a human guide or physical signage.',
    pdfNote: stillWriting,
  },
  {
    slug: 'captcha-digital-accessibility',
    title: 'The Social Implications of Innovation in CAPTCHA and Digital Accessibility',
    date: '2026',
    abstract:
      'This paper examines the social implications of innovation in CAPTCHA and human-verification systems, with a focus on digital accessibility. As bots and artificial intelligence become increasingly sophisticated, CAPTCHA technology has evolved from traditional visual and audio puzzles toward behavioral and automated verification. While these innovations may improve online security and reduce barriers for some users, they also raise concerns about accessibility, privacy, and digital inequality. This research will explore how different forms of human verification affect users, particularly people with disabilities, and how technological changes can create both benefits and unintended consequences. By examining the relationship between technological innovation and its social impact, this paper will consider how human-verification systems can balance security, accessibility, privacy, and equal participation in the digital world.',
    pdfNote: stillWriting,
  },
  {
    slug: 'trivis-vietnamese-sign-language',
    title: 'TriViS: A Large-Scale Multi-View Benchmark for Vietnamese Sign Language Recognition',
    date: '2026',
    abstract:
      'This paper presents TriViS, the first large-scale multi-view Vietnamese dataset for Continuous Sign Language Recognition and Translation, designed as a controlled benchmark for studying dataset design in underrepresented sign languages. TriViS contains 12,000 sentences and 84,453 synchronized videos captured from three viewpoints (frontal, 45° left, and 45° right) across both controlled studio recordings and outdoor environments. The synchronized multi-view setup enables systematic analysis of viewpoint sensitivity, view complementarity, and other data collection factors that are difficult to isolate in uncontrolled web-scale corpora. Along with the dataset, we introduce a simple multi-view fusion framework that integrates synchronized visual streams into a unified representation for sentence-level recognition and translation. Using state-of-the-art CSLR and CSLT baselines, we conduct extensive experiments to evaluate the contribution of individual viewpoints, multi-view fusion strategies, sentence-independent generalization, and the effect of LLM scale. Our results show that multi-view observations consistently outperform single-view baselines and provide new empirical insights into how viewpoint configuration and controlled data collection affect continuous sign language understanding. Our code and dataset are publicly available on GitHub and Hugging Face.',
    pdfNote: underReview,
  },
  {
    slug: 'pathflow-pathology-video-classification',
    title:
      'PathFlow: A Motion-Aware Prototyping Framework for Microscopic Pathology Video Classification',
    date: '2025',
    abstract:
      'In recent years, AI in pathology has attracted considerable research interest; however, most existing studies focus exclusively on data collected using digital scanners. This creates a significant gap in clinical practice, as many hospitals worldwide still rely on traditional microscopy. In this paper, we address this disparity by focusing, for the first time, on AI applications for data captured directly from microscopy video feeds. We introduce MVP-CRC, the first multi-institutional dataset of 1,379 microscopy videos on colorectal carcinoma collected from seven hospitals across Vietnam with three diagnostic labels. Building on this dataset, we propose PathFlow, a motion-aware prototype-based framework that (i) selects diagnostically relevant frames using optical flow, (ii) aggregates frame-level representations via a learnable prototype bank with Top-L retrieval, and (iii) models global context with a transformer encoder for video-level prediction. Experiments on MVP-CRC show that PathFlow achieves state-of-the-art performance, reaching 91.90% in accuracy and outperforming existing approaches by 5.87%. Finally, we integrate PathFlow into an interactive web interface for real-time clinical decision support without requiring slide scanning. PathFlow is capable of reducing physician processing time by up to 50%, demonstrating a practical pathway toward deployment in resource-constrained settings.',
    pdfNote: underReview,
  },
  {
    slug: 'ai-failures-and-hallucinations',
    title: 'Examining Trends of Failures and Hallucinations in AI and Automation Technologies',
    date: '2025',
    abstract:
      'Artificial intelligence and automated systems have become essential to modern society. As these technologies become more widely deployed, concerns have grown about the reliability of their outputs and the risks posed when automated or algorithmic models generate incorrect, biased, or hallucinatory results. This paper examines failures in AI and automation technologies by analyzing incident frequency, ethical issues, and legal outcomes across technology groups. The study draws on two datasets: the AIAAIC Repository, which catalogues reported incidents involving AI, algorithmic, and automated systems, and the AI Hallucination Cases Database, which compiles legal cases involving hallucinated outputs generated by large language models (LLMs). Using Tableau Desktop, visualizations were created to examine temporal trends in reported incidents, the distribution of cases and ethical issues across system types, and the relationship between hallucination errors and judicial responses. Overall, the findings from this paper reveal differences in how failures, ethical issues, and legal outcomes are distributed across AI and automation technologies. These differences suggest that risk levels vary depending on system design, deployment context, and use.',
    pdfUrl: '/research/ai-failures-and-hallucinations.pdf',
  },
]
