/// <reference path="./global.d.ts" />
// @ts-check

export class TranslationService {
  /**
   * @param {ExternalApi} api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Free members: only fetch existing translations
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text).then(res => res.translation);
  }

  /**
   * Batch translates using free service
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if (!texts.length) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(texts.map(text => this.free(text)));
  }

  /**
   * Requests translation with retry (max 3 tries)
   * @param {string} text
   * @returns {Promise<void>}
   */
  async request(text) {
  let attempts = 0;
  let lastError;

  const requestOnce = () =>
    new Promise((resolve, reject) => {
      this.api.request(text, err => {
        if (err) reject(err);
        else resolve();
      });
    });

  while (attempts < 3) {
    try {
      await requestOnce();
      return;
    } catch (err) {
      lastError = err;
      attempts++;
    }
  }

  throw lastError;
}


  /**
   * Premium fetch with quality threshold and auto-request
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  async premium(text, minimumQuality) {
  try {
    const result = await this.api.fetch(text);

    if (result.quality < minimumQuality) {
      throw new QualityThresholdNotMet(text);
    }

    return result.translation;
  } catch (err) {
    // Only request if translation is not available
if (!err.message.includes('not been translated')) {
  throw err;
}


    // Request translation and retry fetch
    await this.request(text);

    const result = await this.api.fetch(text);

    if (result.quality < minimumQuality) {
      throw new QualityThresholdNotMet(text);
    }

    return result.translation;
  }
}

}

/**
 * Error when translation quality is too low
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );
    this.text = text;
  }
}

/**
 * Error when batch is empty
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
