# COMP9517 Group Project – Aerial Scene Classification

## Overview

This project explores various methods for classifying aerial landscapes into 15 distinct categories using the **SkyView** dataset from Kaggle. We developed and compared multiple techniques, including both traditional machine learning and deep learning architectures. One of our core approaches involved using **EfficientNetV2**, a modern CNN known for its speed and training efficiency.

## File Structure

- `Project_final.ipynb` – Main notebook integrating all methods, training pipelines, and evaluation metrics.  
- `README.md` – Documentation (this file).  
- Additional utility functions (if any) for preprocessing, data loading, or visualization are contained within the notebook.

## Dataset

We used the [SkyView Dataset](https://www.kaggle.com/datasets/ankit1743/skyview-an-aerial-landscape-dataset), which includes 800 high-resolution images per class across 15 balanced categories.

- For most models, we applied a standard **80-20 stratified split**.
- For **EfficientNetV2**, we used a custom folder-based split (`train/`, `test/`) suitable for `ImageFolder` and PyTorch’s `DataLoader`.

## Method Highlight: EfficientNetV2

### Description

EfficientNetV2-S was used as a deep learning baseline. It introduces architectural enhancements such as:

- **Compound Scaling**: Joint scaling of depth, width, and resolution.
- **Squeeze-and-Excitation (SE) Blocks**: Channel-wise attention for boosting important features.
- **Fused MBConv** blocks and progressive learning strategies for faster training.

### Implementation Details

- Loaded `efficientnet_v2_s` from `torchvision.models` with pretrained ImageNet weights.
- Final classification layer modified to output logits for 15 classes.
- Frozen early layers for transfer learning, fine-tuned deeper layers.
- Applied data augmentation: `RandomHorizontalFlip`, resizing, normalization.
- Used early stopping and learning rate scheduling to improve training stability.

### Dataset Handling Specifics

EfficientNetV2 uses a folder-based format compatible with `torchvision.datasets.ImageFolder`, structured like this:

```
data/
  ├── train/
  │   ├── beach/
  │   ├── forest/
  │   └── ...
  └── test/
      ├── beach/
      ├── forest/
      └── ...
```

This setup differs from the random-split strategy used in traditional machine learning models implemented in the notebook.

## Libraries Required (EfficientNetV2)

Make sure these libraries are installed:

```
pip install torch torchvision numpy matplotlib tqdm scikit-learn
```

- `torch`, `torchvision` – Model loading, training, and transforms.
- `matplotlib`, `numpy` – Plotting and numerical operations.
- `tqdm` – Progress bar visualization.
- `scikit-learn` – Precision, recall, F1-score calculation.

## How to Run

1. Clone this repository or download the project files.
2. Install required libraries using the pip command above.
3. Download and unzip the SkyView dataset. Structure the data as described above.
4. Open `Project_final.ipynb` using Jupyter Notebook or Google Colab.
5. Modify the following line depending on your hardware:

```python
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
```

6. Run the notebook step-by-step to train and evaluate models.

## Acknowledgements

- **Dataset**: [SkyView on Kaggle](https://www.kaggle.com/datasets/ankit1743/skyview-an-aerial-landscape-dataset)  
- **Model Architecture**: [EfficientNetV2: Smaller Models and Faster Training](https://arxiv.org/abs/2104.00298)  
- **Pretrained Models**: [TorchVision Model Zoo](https://pytorch.org/vision/stable/models.html)
