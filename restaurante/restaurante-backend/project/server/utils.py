from flask import jsonify

def list_to_json(_list):
    return jsonify(list(object.to_dict() for object in _list))
