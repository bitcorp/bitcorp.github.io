
o1_1_1={AVGDEV:1,CMO:1,DEMA:1,EMA:1,KAMA:1,LINEARREG:1,LINEARREG_ANGLE:1,LINEARREG_INTERCEPT:1,LINEARREG_SLOPE:1,MAX:1,MIDPOINT:1,MIN:1,MOM:1,ROC:1,ROCP:1,ROCR:1,ROCR100:1,RSI:1,SMA:1,SUM:1,TEMA:1,TRIMA:1,TRIX:1,TSF:1,WMA:1}

o2_1_0={MULT:1,ADD:1,SUB:1,DIV:1};

o2_1_1={BETA:1,CORREL:1,
    AROONOSC:1,MIDPRICE:1,MINUS_DM:1,PLUS_DM:1   // different parameter names but same signature
    };

o1_1_2={STDDEV:1,VAR:1,MA:1}; // MA actually has different parameters but the signature is the same

o_4_1_0int={CDL2CROWS:1,CDL3BLACKCROWS:1,CDL3INSIDE:1,CDL3LINESTRIKE:1,CDL3OUTSIDE:1,CDL3STARSINSOUTH:1,CDL3WHITESOLDIERS:1,CDLADVANCEBLOCK:1,CDLBELTHOLD:1,CDLBREAKAWAY:1,CDLCLOSINGMARUBOZU:1,CDLCONCEALBABYSWALL:1,CDLCOUNTERATTACK:1,CDLDOJI:1,CDLDOJISTAR:1,CDLDRAGONFLYDOJI:1,CDLENGULFING:1,CDLGAPSIDESIDEWHITE:1,CDLGRAVESTONEDOJI:1,CDLHAMMER:1,CDLHANGINGMAN:1,CDLHARAMI:1,CDLHARAMICROSS:1,CDLHIGHWAVE:1,CDLHIKKAKE:1,CDLHIKKAKEMOD:1,CDLHOMINGPIGEON:1,CDLIDENTICAL3CROWS:1,CDLINNECK:1,CDLINVERTEDHAMMER:1,CDLKICKING:1,CDLKICKINGBYLENGTH:1,CDLLADDERBOTTOM:1,CDLLONGLEGGEDDOJI:1,CDLLONGLINE:1,CDLMARUBOZU:1,CDLMATCHINGLOW:1,CDLONNECK:1,CDLPIERCING:1,CDLRICKSHAWMAN:1,CDLRISEFALL3METHODS:1,CDLSEPARATINGLINES:1,CDLSHOOTINGSTAR:1,CDLSHORTLINE:1,CDLSPINNINGTOP:1,CDLSTALLEDPATTERN:1,CDLSTICKSANDWICH:1,CDLTAKURI:1,CDLTASUKIGAP:1,CDLTHRUSTING:1,CDLTRISTAR:1,CDLUNIQUE3RIVER:1,CDLUPSIDEGAP2CROWS:1,CDLXSIDEGAP3METHODS:1}

o_4_1_1int={CDLABANDONEDBABY:1,CDLDARKCLOUDCOVER:1,CDLEVENINGDOJISTAR:1,CDLEVENINGSTAR:1,CDLMATHOLD:1,CDLMORNINGDOJISTAR:1,CDLMORNINGSTAR:1};

o3_1_1={ADX:1,ADXR:1,ATR:1,CCI:1,DX:1,MINUS_DI:1,NATR:1,PLUS_DI:1,WILLR:1};

pobj={"o_TA_ACCBANDS":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outRealUpperBand","$outRealMiddleBand","$outRealLowerBand"],"o_TA_ACOS":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_ADD":["$startIdx","$endIdx","$inReal0","$inReal1","$outBegIdx","$outNBElement","$outReal"],"o_TA_ADOSC":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$inVolume","$optInFastPeriod","$optInSlowPeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_AD":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$inVolume","$outBegIdx","$outNBElement","$outReal"],"o_TA_ADXR":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_ADX":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_APO":["$startIdx","$endIdx","$inReal","$optInFastPeriod","$optInSlowPeriod","$optInMAType","$outBegIdx","$outNBElement","$outReal"],"o_TA_AROONOSC":["$startIdx","$endIdx","$inHigh","$inLow","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_AROON":["$startIdx","$endIdx","$inHigh","$inLow","$optInTimePeriod","$outBegIdx","$outNBElement","$outAroonDown","$outAroonUp"],"o_TA_ASIN":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_ATAN":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_ATR":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_AVGDEV":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_AVGPRICE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outReal"],"o_TA_BBANDS":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$optInNbDevUp","$optInNbDevDn","$optInMAType","$outBegIdx","$outNBElement","$outRealUpperBand","$outRealMiddleBand","$outRealLowerBand"],"o_TA_BETA":["$startIdx","$endIdx","$inReal0","$inReal1","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_BOP":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outReal"],"o_TA_CCI":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_CDL2CROWS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDL3BLACKCROWS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDL3INSIDE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDL3LINESTRIKE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDL3OUTSIDE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDL3STARSINSOUTH":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDL3WHITESOLDIERS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLABANDONEDBABY":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLADVANCEBLOCK":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLBELTHOLD":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLBREAKAWAY":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLCLOSINGMARUBOZU":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLCONCEALBABYSWALL":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLCOUNTERATTACK":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLDARKCLOUDCOVER":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLDOJISTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLDOJI":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLDRAGONFLYDOJI":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLENGULFING":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLEVENINGDOJISTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLEVENINGSTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLGAPSIDESIDEWHITE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLGRAVESTONEDOJI":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHAMMER":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHANGINGMAN":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHARAMICROSS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHARAMI":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHIGHWAVE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHIKKAKEMOD":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHIKKAKE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLHOMINGPIGEON":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLIDENTICAL3CROWS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLINNECK":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLINVERTEDHAMMER":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLKICKINGBYLENGTH":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLKICKING":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLLADDERBOTTOM":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLLONGLEGGEDDOJI":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLLONGLINE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLMARUBOZU":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLMATCHINGLOW":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLMATHOLD":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLMORNINGDOJISTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLMORNINGSTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$optInPenetration","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLONNECK":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLPIERCING":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLRICKSHAWMAN":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLRISEFALL3METHODS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLSEPARATINGLINES":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLSHOOTINGSTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLSHORTLINE":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLSPINNINGTOP":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLSTALLEDPATTERN":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLSTICKSANDWICH":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLTAKURI":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLTASUKIGAP":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLTHRUSTING":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLTRISTAR":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLUNIQUE3RIVER":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLUPSIDEGAP2CROWS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CDLXSIDEGAP3METHODS":["$startIdx","$endIdx","$inOpen","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outInteger"],"o_TA_CEIL":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_CMO":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_CORREL":["$startIdx","$endIdx","$inReal0","$inReal1","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_COSH":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_COS":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_DEMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_DIV":["$startIdx","$endIdx","$inReal0","$inReal1","$outBegIdx","$outNBElement","$outReal"],"o_TA_DX":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_EMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_EXP":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_FLOOR":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_HT_DCPERIOD":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_HT_DCPHASE":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_HT_PHASOR":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outInPhase","$outQuadrature"],"o_TA_HT_SINE":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outSine","$outLeadSine"],"o_TA_HT_TRENDLINE":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_HT_TRENDMODE":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outInteger"],"o_TA_IMI":["$startIdx","$endIdx","$inOpen","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_Initialize":[""],"o_TA_KAMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_LINEARREG_ANGLE":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_LINEARREG_INTERCEPT":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_LINEARREG_SLOPE":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_LINEARREG":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_LN":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_LOG10":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_MACDEXT":["$startIdx","$endIdx","$inReal","$optInFastPeriod","$optInFastMAType","$optInSlowPeriod","$optInSlowMAType","$optInSignalPeriod","$optInSignalMAType","$outBegIdx","$outNBElement","$outMACD","$outMACDSignal","$outMACDHist"],"o_TA_MACDFIX":["$startIdx","$endIdx","$inReal","$optInSignalPeriod","$outBegIdx","$outNBElement","$outMACD","$outMACDSignal","$outMACDHist"],"o_TA_MACD":["$startIdx","$endIdx","$inReal","$optInFastPeriod","$optInSlowPeriod","$optInSignalPeriod","$outBegIdx","$outNBElement","$outMACD","$outMACDSignal","$outMACDHist"],"o_TA_MAMA":["$startIdx","$endIdx","$inReal","$optInFastLimit","$optInSlowLimit","$outBegIdx","$outNBElement","$outMAMA","$outFAMA"],"o_TA_MA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$optInMAType","$outBegIdx","$outNBElement","$outReal"],"o_TA_MAVP":["$startIdx","$endIdx","$inReal","$inPeriods","$optInMinPeriod","$optInMaxPeriod","$optInMAType","$outBegIdx","$outNBElement","$outReal"],"o_TA_MAXINDEX":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outInteger"],"o_TA_MAX":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MEDPRICE":["$startIdx","$endIdx","$inHigh","$inLow","$outBegIdx","$outNBElement","$outReal"],"o_TA_MFI":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$inVolume","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MIDPOINT":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MIDPRICE":["$startIdx","$endIdx","$inHigh","$inLow","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MININDEX":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outInteger"],"o_TA_MINMAXINDEX":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outMinIdx","$outMaxIdx"],"o_TA_MINMAX":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outMin","$outMax"],"o_TA_MIN":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MINUS_DI":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MINUS_DM":["$startIdx","$endIdx","$inHigh","$inLow","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MOM":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_MULT":["$startIdx","$endIdx","$inReal0","$inReal1","$outBegIdx","$outNBElement","$outReal"],"o_TA_NATR":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_NVI":["$startIdx","$endIdx","$inClose","$inVolume","$outBegIdx","$outNBElement","$outReal"],"o_TA_OBV":["$startIdx","$endIdx","$inReal","$inVolume","$outBegIdx","$outNBElement","$outReal"],"o_TA_PLUS_DI":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_PLUS_DM":["$startIdx","$endIdx","$inHigh","$inLow","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_PPO":["$startIdx","$endIdx","$inReal","$optInFastPeriod","$optInSlowPeriod","$optInMAType","$outBegIdx","$outNBElement","$outReal"],"o_TA_PVI":["$startIdx","$endIdx","$inClose","$inVolume","$outBegIdx","$outNBElement","$outReal"],"o_TA_ROCP":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_ROCR100":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_ROCR":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_ROC":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_RSI":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_SAREXT":["$startIdx","$endIdx","$inHigh","$inLow","$optInStartValue","$optInOffsetOnReverse","$optInAccelerationInitLong","$optInAccelerationLong","$optInAccelerationMaxLong","$optInAccelerationInitShort","$optInAccelerationShort","$optInAccelerationMaxShort","$outBegIdx","$outNBElement","$outReal"],"o_TA_SAR":["$startIdx","$endIdx","$inHigh","$inLow","$optInAcceleration","$optInMaximum","$outBegIdx","$outNBElement","$outReal"],"o_TA_SINH":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_SIN":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_SMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_SQRT":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_STDDEV":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$optInNbDev","$outBegIdx","$outNBElement","$outReal"],"o_TA_STOCHF":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInFastK_Period","$optInFastD_Period","$optInFastD_MAType","$outBegIdx","$outNBElement","$outFastK","$outFastD"],"o_TA_STOCHRSI":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$optInFastK_Period","$optInFastD_Period","$optInFastD_MAType","$outBegIdx","$outNBElement","$outFastK","$outFastD"],"o_TA_STOCH":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInFastK_Period","$optInSlowK_Period","$optInSlowK_MAType","$optInSlowD_Period","$optInSlowD_MAType","$outBegIdx","$outNBElement","$outSlowK","$outSlowD"],"o_TA_SUB":["$startIdx","$endIdx","$inReal0","$inReal1","$outBegIdx","$outNBElement","$outReal"],"o_TA_SUM":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_T3":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$optInVFactor","$outBegIdx","$outNBElement","$outReal"],"o_TA_TANH":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_TAN":["$startIdx","$endIdx","$inReal","$outBegIdx","$outNBElement","$outReal"],"o_TA_TEMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_TRANGE":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outReal"],"o_TA_TRIMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_TRIX":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_TSF":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_TYPPRICE":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outReal"],"o_TA_ULTOSC":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod1","$optInTimePeriod2","$optInTimePeriod3","$outBegIdx","$outNBElement","$outReal"],"o_TA_VAR":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$optInNbDev","$outBegIdx","$outNBElement","$outReal"],"o_TA_WCLPRICE":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$outBegIdx","$outNBElement","$outReal"],"o_TA_WILLR":["$startIdx","$endIdx","$inHigh","$inLow","$inClose","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"],"o_TA_WMA":["$startIdx","$endIdx","$inReal","$optInTimePeriod","$outBegIdx","$outNBElement","$outReal"]};

TMPARRAYTODEL=["$optInTimePeriod", "$optInFastPeriod", "$optInSlowPeriod", "$optInMAType", "$optInNbDevUp", "$optInNbDevDn", "$optInPenetration", "$optInFastMAType", "$optInSlowMAType", "$optInSignalPeriod", "$optInSignalMAType", "$optInFastLimit", "$optInSlowLimit", "$optInMinPeriod", "$optInMaxPeriod", "$optInStartValue", "$optInOffsetOnReverse", "$optInAccelerationInitLong", "$optInAccelerationLong", "$optInAccelerationMaxLong", "$optInAccelerationInitShort", "$optInAccelerationShort", "$optInAccelerationMaxShort", "$optInAcceleration", "$optInMaximum", "$optInNbDev", "$optInFastK_Period", "$optInFastD_Period", "$optInFastD_MAType", "$optInSlowK_Period", "$optInSlowK_MAType", "$optInSlowD_Period", "$optInSlowD_MAType", "$optInVFactor", "$optInTimePeriod1", "$optInTimePeriod2", "$optInTimePeriod3"];

dfltsObj={"$optInTimePeriod":14,"$optInFastPeriod":6,"$optInSlowPeriod":12,"$optInMAType":1,"$optInNbDevUp":2,"$optInNbDevDn":2,"$optInPenetration":1,"$optInFastMAType":1,"$optInSlowMAType":1,"$optInSignalPeriod":1,"$optInSignalMAType":1,"$optInFastLimit":1,"$optInSlowLimit":1,"$optInMinPeriod":1,"$optInMaxPeriod":1,"$optInStartValue":1,"$optInOffsetOnReverse":1,"$optInAccelerationInitLong":1,"$optInAccelerationLong":1,"$optInAccelerationMaxLong":1,"$optInAccelerationInitShort":1,"$optInAccelerationShort":1,"$optInAccelerationMaxShort":1,"$optInAcceleration":1,"$optInMaximum":1,"$optInNbDev":1,"$optInFastK_Period":1,"$optInFastD_Period":1,"$optInFastD_MAType":1,"$optInSlowK_Period":1,"$optInSlowK_MAType":1,"$optInSlowD_Period":1,"$optInSlowD_MAType":1,"$optInVFactor":1,"$optInTimePeriod1":5,"$optInTimePeriod2":10,"$optInTimePeriod3":20};

taobj={};
    function cdlinit() {
	var parentwin;
	parentwin=window.opener!=null?window.opener:top;	
		
		var curtab,curtabname;
		bs="";
for (var i in pobj) {
	if (parentwin[i.replace("o_TA_","_f")]) {
		curtabname=i.replace("o_TA_","");
		curtab="";
    //curtab+="<table cellpadding=0 cellspacing=0 border=0><tr><td width=222> <input type='checkbox' name='"+i.replace("o_TA_","c_TA_")+"' value='0' onclick='addthis(this)'> "+i.replace("o_TA_","")+""+"</td>";
    curtab+="<table cellpadding=0 cellspacing=0 border=0><tr><td width=222>"+i.replace("o_TA_","")+""+"</td>";
    for (var p in pobj[i])
        {
			var parname=pobj[i][p].replace("$optIn",""); 
            if (pobj[i][p].indexOf("$optIn")==0)
            curtab+="<td width=80 align=right>"+parname+":</td><td width=55 align=left>"+"<input type='text' name='"+i+parname+"' style='width:50px' value='"+dfltsObj[pobj[i][p]]+"'> </td>"
            
        }    
    curtab+="<td></td><td width=222 align=right><select name='"+i.replace("o_TA_","s_TA_")+"_toAxis'>"+window.amenutxt+"</select></td>"+
    "<td width=2 align=right><select name='"+i.replace("o_TA_","s_TA_")+"_onSeries'>"+window.smenutxt+"</select></td><td width=5><input type='button' value='X' onclick='remconf()'></td><td width=5><input type='button' value='add'  onclick='addthis({name:\""+i.replace("o_TA_","c_TA_")+"\"})' ></td></tr></table>";
    bs+=curtab;
    taobj[curtabname]=curtab;
 }
    
}

/*
// useless code for ref
cdlmenu=[];
indmenu=[];
cdlmenustr="[";
indmenustr="[";
for (var i in pobj) { // this should really be inside the above loop. or done statically
if (parentwin[i.replace("o_TA_","_f")]) {
var xname=i.replace("o_TA_","");
if (xname.indexOf("CDL")>-1) {cdlmenu.push({text:xname,onclick:function(){alert(xname)}})}
else { indmenu.push({text:xname,onclick:function(){alert(xname)}})
	}
if (xname.indexOf("CDL")>-1) {cdlmenustr+="{text:'"+xname+"',onclick:function(){addTA('"+xname+"')}},"}
else {indmenustr+="{text:'"+xname+"',onclick:function(){addTA('"+xname+"')}},"}
}
}

		indmenustr[indmenustr.length-1]="]";
		cdlmenustr[indmenustr.length-1]="]";
// end useless code
*/
		
        //document.getElementById("optsdiv").innerHTML+=bs;
        //left for reference
        
    }
