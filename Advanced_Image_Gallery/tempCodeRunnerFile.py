import os
import sys
import json
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration
import pytesseract
import asyncio
from tqdm import tqdm