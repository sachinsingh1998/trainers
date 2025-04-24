# COMP9517 Group Project – Aerial Scene Classification

## Overview

This project explores various methods for classifying aerial landscapes into 15 distinct categories using the **SkyView** dataset from Kaggle. We developed and compared multiple techniques including traditional machine learning and deep learning architectures. One of our core approaches involved using **EfficientNetV2**, a modern CNN architecture known for its speed and performance efficiency.

## File Structure

- `Project_final.ipynb` – Main notebook integrating all methods, training pipelines, and evaluation metrics.
- `README.md` – Documentation (this file).
- Other Python utility scripts (if any) are for preprocessing, visualization, or training support.

## Dataset

We used the [SkyView Dataset](https://www.kaggle.com/datasets/ankit1743/skyview-an-aerial-landscape-dataset) containing 800 images across 15 classes. The dataset was split 80-20 for training and testing respectively.

---

## Method Highlight: EfficientNetV2

### Description

**EfficientNetV2-S** was used as one of the deep learning architectures. Key features include:
- Compound scaling across depth, width, and resolution.
- Incorporation of Squeeze-and-Excitation (SE) blocks for channel-wise attention.
- Pretrained weights on ImageNet were leveraged for transfer learning.

### Implementation

- Loaded EfficientNetV2-S via `torchvision.models`.
- Replaced the final classification head to output logits for 15 classes.
- Used transfer learning with frozen early layers; fine-tuned deeper layers.
- Applied data augmentation and early stopping to improve generalization and avoid overfitting.

### Libraries Used
- `torch`, `torchvision`, `tqdm`, `matplotlib`, `numpy`, and `scikit-learn`.

> Pretrained weights and model architecture were sourced from [torchvision official models](https://pytorch.org/vision/stable/models.html).

---

## How to Run

1. Clone the repository or download the notebook.
2. Install required libraries:
   ```bash
   pip install torch torchvision scikit-learn matplotlib tqdm
