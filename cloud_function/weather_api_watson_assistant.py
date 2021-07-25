import sys
import requests

def main(dict):
    try: 
        req = requests.get('https://api.weather.com/v3/wx/forecast/daily/3day?apiKey=2b6ed19f3d474152aed19f3d4791527d&geocode=-16.85,-42.07&format=json&language=pt-BR&units=m')
        
        data = req.json()
        
        return { 
            'err': False,
            'narrative': data['narrative'][0],
            'calendarDayTemperatureMax': data['calendarDayTemperatureMax'][0],
            'calendarDayTemperatureMin': data['calendarDayTemperatureMin'][0],
            'relativeHumidity': data['daypart'][0]['relativeHumidity'][1]
        }
        
    except:
        return { 'err': True }
