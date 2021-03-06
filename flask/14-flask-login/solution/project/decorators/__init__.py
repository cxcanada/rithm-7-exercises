from functools import wraps
from flask import redirect, url_for, flash
from flask_login import current_user

def prevent_login_signup(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if current_user.is_authenticated:
            flash("You are logged in already")
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)
    return wrapper

def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        correct_id = kwargs.get('user_id') or kwargs.get('id')
        if correct_id != current_user.id:
            flash("Not Authorized")
            return redirect(url_for('users.index',id=current_user.id))
        return fn(*args, **kwargs)
    return wrapper

